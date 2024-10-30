import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function AdminBookings() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);

    useEffect(() => {
        const fetchBookings = async () => {
            setLoading(true);
            try {
                const dateQuery = selectedDate ? `?date=${selectedDate.toISOString().split('T')[0]}` : '';
                const response = await axios.get(`http://localhost:5001/api/accepted-bookings${dateQuery}`);
                setBookings(response.data.data);
            } catch (error) {
                setError('Error fetching accepted bookings');
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, [selectedDate]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Accepted Bookings</h1>
            <div style={styles.datePickerContainer}>
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="yyyy/MM/dd"
                    placeholderText="Select a date"
                    style={styles.datePicker}
                />
            </div>
            {bookings.length > 0 ? (
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>User Name</th>
                            <th style={styles.th}>Email</th>
                            <th style={styles.th}>Date</th>
                            <th style={styles.th}>Slot</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking) => (
                            <tr key={booking._id}>
                                <td style={styles.td}>{booking.user.name}</td>
                                <td style={styles.td}>{booking.user.email}</td>
                                <td style={styles.td}>{new Date(booking.appointmentDate).toLocaleDateString()}</td>
                                <td style={styles.td}>{booking.slot}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p style={styles.noBookings}>No bookings for this date</p>
            )}
        </div>
    );
}

const styles = {
    container: {
        padding: '30px',
        backgroundColor: '#2C3E50', // A darker, sleek background
        color: '#ECF0F1', // Softer, light color for text
        borderRadius: '12px',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)', // Increased shadow for depth
        minHeight: '100vh',
        maxWidth: '100%', // Limit width for readability
        margin: '0 auto', // Center align
    },
    heading: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '30px',
        color: 'white', // Highlight heading in a warm yellow-orange
    },
    datePickerContainer: {
        marginBottom: '25px',
        textAlign: 'center',
    },
    datePicker: {
        backgroundColor: '#ECF0F1', // Soft white for input
        border: '1px solid #BDC3C7', // Light grey border
        borderRadius: '6px',
        padding: '10px 15px',
        color: '#2C3E50', // Darker text for contrast
        fontSize: '1rem',
        width: 'auto',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'border-color 0.3s',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        backgroundColor: '#34495E', // Darker background for table
        borderRadius: '6px',
        overflow: 'hidden',
    },
    th: {
        backgroundColor: '#16A085', // Teal color for headers
        color: '#ECF0F1',
        padding: '12px',
        borderBottom: '2px solid #1ABC9C',
        textAlign: 'left',
        fontSize: '1.1rem',
    },
    td: {
        padding: '12px',
        borderBottom: '1px solid #7F8C8D', // Light grey borders
        color: '#ECF0F1',
        textAlign: 'left',
        fontSize: '1rem',
    },
    noBookings: {
        textAlign: 'center',
        color: '#E74C3C', // Red for no bookings message
        fontSize: '1.2rem',
        marginTop: '20px',
    },
};
