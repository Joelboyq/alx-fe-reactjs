const UserProfile = (props) => {
    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '5px' }}>
            <h2 style={{ color: 'blue', fontSize: '20px' }}>{props.name}</h2>
            <p>Age: <span style={{ fontWeight: 'bold', color: 'darkred' }}>{props.age}</span></p>
            <p style={{ fontStyle: 'italic' }}>Bio: {props.bio}</p>
        </div>
    );
};

export default UserProfile;
