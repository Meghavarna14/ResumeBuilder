import React from "react";
import "./Resume.css";

function Personal(props) {
  const nextPage = () => {
    props.history.push("/Education");
  };
  return (
    <div align="center">
      <h3>PERSONAL DETAILS</h3>
      <form align="center">
        <table align="center">
          <tbody>
            <tr>
              <td>
                <label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="FirstName*"
                    id="fname"
                  />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="LastName*"
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
                    className="email"
                    class="form-control"
                    type="email"
                    placeholder="Email-Id*"
                  />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Phone Number"
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
                    placeholder="Your Website"
                  />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="GitHub"
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
                    placeholder="LinkedIn"
                  />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Twitter"
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
                    placeholder="FaceBook"
                  />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Instagram"
                  />
                </label>
              </td>
            </tr>
            <br />
            <br />
            <button className="back" type="submit" class="btn btn-dark">
              BACK
            </button>
            <button
              id="next"
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
export default Personal;
