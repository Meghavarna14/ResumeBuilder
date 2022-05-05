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
                  <input type="text" placeholder="College University*" />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input type="date" placeholder="dd-mm-yyyy" />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input type="date" placeholder="dd-mm-yyyy" />
                </label>
              </td>
            </tr>
            <br />
            <br />
            <tr>
              <td>
                <label>
                  <input type="text" placeholder="Qualification*" />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input
                    className="desc1"
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
                  <input type="text" placeholder="School*" />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input type="date" placeholder="dd-mm-yyyy" />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input type="date" placeholder="dd-mm-yyyy" />
                </label>
              </td>
            </tr>
            <br />
            <br />
            <tr>
              <td>
                <label>
                  <input type="text" placeholder="Qualification*" />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input
                    className="desc2"
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
    </div>
  );
}
export default Education;
