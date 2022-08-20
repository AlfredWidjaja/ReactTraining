import React, {useState} from 'react'

function TableProfile(){

    const [profiles, setProfiles] = useState([
        {
          id: 1,
          name: "Alfred Widjaja",
          hobby: "Playing Games"
        },
        {
          id: 2,
          name:"TESTING",
          hobby:"Testing"
        }
    ]);

    const [name, setName] = useState("")
    const [hobby, setHobby] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        let lastIndex = profiles.length-1
        let id = profiles[lastIndex].id-1
        let temp = {
            id,
            name,
            hobby
        }

        let tempProfiles = [...profiles]
        tempProfiles.push(temp)
        setProfiles(tempProfiles)
    }

    return (
        <div className="container">
            <div className="row py-5">
                <div className="col-8">
                <table className="table table-bordered table-hovered">
                    <thead className="table-primary">
                        <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Hobby</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        profiles.map( (profile) => {
                            const {id, name, hobby} = profile
                            return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{hobby}</td>
                            </tr>
                            )
                        })
                        }
                    </tbody>
                    </table>
                </div>
                <div className="col-4">
                    <form>
                        <h3>Add Profile</h3>
                        <label className="form-label">Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Input Name..."
                            onChange={(e) => setName(e.target.value)}>
                        </input>
                        <label className="form-label">Hoby: </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Input Hobby..."
                            onChange={(e) => setHobby(e.target.value)}>
                        </input>
                        <button
                            onClick={(e) => submitHandler(e)} 
                            className="btn btn-success btn-sm mt-3">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
      );
}

export default TableProfile