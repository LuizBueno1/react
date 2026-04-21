function Choice({ status }) {
    
    switch (status) {
        case "active":
            return <h1>User Active</h1>;
        case "inactive":
            return <h1>User Inactive</h1>;
        case "blocked":
            return <h1>User Blocked</h1>;
        default:
            return <h1>Status unknown</h1>;
    }
}

export default Choice;