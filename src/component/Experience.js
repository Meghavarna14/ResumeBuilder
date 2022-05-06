import React from "react";
import "./Resume.css";
function Experience(props) {
  const nextPage = () => {
    props.history.push("/Extra");
  };
  const prevPage = () => {
    props.history.push("/Projects");
  };
  return (
    <div align="center">
      <h2>EXPERIENCE DETAILS</h2>

      <form>
        <table>
          <tbody>
            <tr>
              <td>
                <h3>EXPERIENCE 1</h3>
                <label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Institute/Organisation*"
                  />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Position*"
                  />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Duration*"
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
                    className="desc3"
                    class="form-control"
                    type="text"
                    placeholder="Description*"
                  />
                </label>
              </td>
            </tr>
            <br />
            <h3>EXPERIENCE 2</h3>
            <tr>
              <td>
                <label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Institute/Organisation*"
                  />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Position*"
                  />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Duration*"
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
                    className="desc4"
                    type="text"
                    class="form-control"
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
              id="next4"
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

export default Experience;
