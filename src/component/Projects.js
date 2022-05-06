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
      <h2>PROJECTS DEVELOPED</h2>
      <h3>PROJECT 1</h3>
      <form align="center">
        <table align="center">
          <tbody>
            <tr>
              <td>
                <label>
                  <input
                    className="title"
                    class="form-control"
                    type="text"
                    placeholder="Title*"
                  />
                </label>
                <br />
                <br />
                <label>
                  <input
                    className="link"
                    class="form-control"
                    type="text"
                    placeholder="Link*"
                  />
                </label>

                <br />
                <br />
                <label>
                  <input
                    className="description"
                    class="form-control"
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
                  <input
                    className="title"
                    class="form-control"
                    type="text"
                    placeholder="Title*"
                  />
                </label>
                <br />
                <br />
                <label>
                  <input
                    className="link"
                    class="form-control"
                    type="text"
                    placeholder="Link*"
                  />
                </label>

                <br />
                <br />
                <label>
                  <input
                    className="description"
                    class="form-control"
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
              class="btn btn-dark"
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
      <br />
      <br />
    </div>
  );
}

export default Projects;
