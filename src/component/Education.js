import React from "react";
import "./Resume.css";
function Education(props) {
  const nextPage = () => {
    props.history.push("/Projects");
  };
  const prevPage = () => {
    props.history.push("/");
  };
  return (
    <div align="center">
      <h2>EDUCATIONAL DETAILS</h2>
      <form>
        <table>
          <tbody>
            <tr>
              <td>
                <label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="College University*"
                  />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input
                    type="date"
                    class="form-control"
                    placeholder="dd-mm-yyyy"
                  />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input
                    type="date"
                    class="form-control"
                    placeholder="dd-mm-yyyy"
                  />
                </label>
              </td>
            </tr>
            <br />
            <br />
            <tr>
              <td>
                <label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Qualification*"
                  />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input
                    className="desc1"
                    class="form-control"
                    type="text"
                    placeholder="Description*"
                  />
                </label>
              </td>
            </tr>
            <br />
            <br />
            <tr>
              <td>
                <label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="School*"
                  />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input
                    type="date"
                    class="form-control"
                    placeholder="dd-mm-yyyy"
                  />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input
                    type="date"
                    class="form-control"
                    placeholder="dd-mm-yyyy"
                  />
                </label>
              </td>
            </tr>
            <br />
            <br />
            <tr>
              <td>
                <label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Qualification*"
                  />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input
                    id="desc2"
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
              id="next2"
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
export default Education;
