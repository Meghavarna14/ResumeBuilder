import React from "react";
import "./Resume.css";
function Extra(props) {
  const prevPage = () => {
    props.history.push("/Experience");
  };
  return (
    <div align="center">
      <form>
        <table>
          <tr>
            <td>
              <h3>SKILLS/LANGUAGES</h3>
              <label>
                <input type="text" placeholder="Skill 1" />
              </label>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <label>
                <input type="text" placeholder="Skill 2" />
              </label>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <label>
                <input type="text" placeholder="Skill 3" />
              </label>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </td>
          </tr>
          <br />
          <br />
          <tr>
            <td>
              <label>
                <input type="text" placeholder="Skill 4" />
              </label>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <label>
                <input type="text" placeholder="Skill 5" />
              </label>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <label>
                <input type="text" placeholder="Skill 6" />
              </label>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </td>
          </tr>
          <br />
          <br />
          <tr>
            <td>
              <h3>INTEREST</h3>
              <label>
                <input type="text" placeholder="Interest 1" />
              </label>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <label>
                <input type="text" placeholder="Interest 2" />
              </label>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <label>
                <input type="text" placeholder="Interest 3" />
              </label>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </td>
          </tr>
          <br />
          <br />
          <tr>
            <td>
              <label>
                <input type="text" placeholder="Interest 4" />
              </label>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <label>
                <input type="text" placeholder="Interest 5" />
              </label>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <label>
                <input type="text" placeholder="Interest 6" />
              </label>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </td>
          </tr>
          <br /> <br />
          <button
            className="back"
            type="submit"
            class="btn btn-secondary"
            onClick={prevPage}
          >
            BACK
          </button>
          <button id="next5" type="submit">
            NEXT
          </button>
        </table>
      </form>
    </div>
  );
}

export default Extra;
