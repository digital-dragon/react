export default function UncontrolledForm() {
    const submitForm = (formData) => {
        console.log(formData.get("name"), formData.get("email"));
    }
    return (
        <>
            <div style={{background: "lightblue"}} >
                <div>******Uncontrolled form************</div>
                <form action={submitForm}>
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter name"></input>
                    <label for="email">email</label>
                    <input type="email" id="email" name="email" placeholder="Enter email"></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}