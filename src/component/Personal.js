import React from "react";
import "./Resume.css";
// import EmailIcon from "@material-ui/icons/Email";
// import PhoneIcon from "@material-ui/icons/Phone";

function Personal(props) {
  const nextPage = () => {
    props.history.push("/Education");
  };
  return (
    <div align="center">
      <h2>PERSONAL DETAILS</h2>
      <form>
        <table>
          <tbody>
            <tr>
              <td>
                <label>
                  <input type="text" placeholder="FirstName" id="fname" />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input type="text" placeholder="LastName" />
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
                    type="email"
                    placeholder="Email Id"
                  />
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </label>
                <label>
                  <input type="text" placeholder="Phone Number" />
                </label>
              </td>
            </tr>
            <br />
            <br />
            <tr>
              <td>
                <label>
                  <input type="text" placeholder="Your Website" />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input type="text" placeholder="GitHub" />
                </label>
              </td>
            </tr>
            <br />
            <br />
            <tr>
              <td>
                <label>
                  <input type="text" placeholder="LinkedIn" />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input type="text" placeholder="Twitter" />
                </label>
              </td>
            </tr>
            <br />
            <br />
            <tr>
              <td>
                <label>
                  <input type="text" placeholder="FaceBook" />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input type="text" placeholder="Instagram" />
                </label>
              </td>
            </tr>
            <br />
            <br />
            <button className="back" type="submit">
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
    </div>
  );
}
export default Personal;
