import './Form.css';

export default function Form() {

    function getFormData(FormData) {

        for (var field of FormData.entries()) {
            console.log(field[0] + " : " + field[1]);
        }
    }

    return (
        <div className="container">
            <form action={getFormData} className="myForm">
                <p>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' />
                </p>
                <p> <label htmlFor="lastname">Last Name</label>
                    <input type="text" name='lastname' /></p>
                <p>
                    <label htmlFor="phone">Phone</label>
                    <input type="phone" name='phone' />
                </p>
                <input type="submit" />
            </form>

        </div>
    )
}
