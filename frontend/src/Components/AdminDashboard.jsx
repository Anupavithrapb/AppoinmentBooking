import { useNavigate } from "react-router-dom";

export default function AdminDashBoard() {
    const nav = useNavigate();

    function UserBtn() {
        nav('/users');
    }

    function BookingBtn() {
        nav("/bookings");
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Admin Dashboard</h1>
            <div style={styles.buttonContainer}>
                <button onClick={UserBtn} style={styles.button}>Users</button>
                <button onClick={BookingBtn} style={styles.button}>Bookings</button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#2C3E50', /* Darker blue-gray */
        color: '#ECF0F1', /* Light gray */
        padding: '20px',
        borderRadius: '15px',
        boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)', /* Deeper shadow for a sleek look */
    },
    heading: {
        marginBottom: '30px',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: 'white', 
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row', /* Buttons in a row */
        gap: '20px', /* Adds space between buttons */
    },
    button: {
        padding: '15px 30px',
        backgroundColor: '#27AE60', /* Vibrant green */
        color: '#FFF',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        fontSize: '18px',
        fontWeight: 'bold',
        transition: 'all 0.3s ease', /* Smooth hover transition */
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', /* Soft shadow for buttons */
    },
    buttonHover: {
        backgroundColor: '#2ECC71', /* Brighter green on hover */
        transform: 'scale(1.05)', /* Slight button scaling */
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
    },
};
