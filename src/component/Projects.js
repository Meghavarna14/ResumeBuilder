import React from "react";
import "./Resume.css";
function Projects(props) {
  const nextPage = () => {
    props.history.push("/Experience");
  };
  const prevPage = () => {
    props.history.push("/Education");
  };
  return (
    <div align="center">
      <h2>EDUCATIONAL DETAILS</h2>
      <h3>PROJECT 1</h3>
      <form>
        <table>
          <tbody>
            <tr>
              <td>
                <label>
                  <input className="title" type="text" placeholder="Title*" />
                </label>
                <br />
                <br />
                <label>
                  <input className="link" type="text" placeholder="Link*" />
                </label>

                <br />
                <br />
                <label>
                  <input
                    className="description"
                    type="text"
                    placeholder="Description*"
                  />
                </label>
              </td>
            </tr>
            <br />
            <br />
            <h3 align="center">PROJECT 2</h3>
            <tr>
              <td>
                <label>
                  <input className="title" type="text" placeholder="Title*" />
                </label>
                <br />
                <br />
                <label>
                  <input className="link" type="text" placeholder="Link*" />
                </label>

                <br />
                <br />
                <label>
                  <input
                    className="description"
                    type="text"
                    placeholder="Description*"
                  />
                </label>
              </td>
            </tr>
            <br />
            <br />
            <button
              className="back"
              type="submit"
              class="btn btn-secondary"
              onClick={prevPage}
            >
              BACK
            </button>
            <button
              id="next3"
              type="submit"
              class="btn btn-danger"
              onClick={nextPage}
            >
              NEXT
            </button>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default Projects;
