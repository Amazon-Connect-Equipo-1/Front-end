import "../../styles/AgentList/AgListSet.css";
const AgListSet = (props) => {
  return (
    <div className="al-container">
      <div className="al-content-container">
        <div className="al-contain-container">
          <span className="al-title">Always show</span>

          <span className="al-text">(min:1 ; max:4)</span>
          <div className="al-divider"></div>

          <span className="al-settings">ActiveCalls</span>
          <span></span>
          <span>
            <label class="switchBtn">
              <input type="checkbox" />
              <div class="slide round"></div>
            </label>
          </span>
          <div></div>

          <span className="al-settings">All Agents</span>
          <span></span>
          <span>
            <label class="switchBtn">
              <input type="checkbox" />
              <div class="slide round"></div>
            </label>
          </span>
          <div></div>

          <span className="al-settings">Online Agents</span>
          <span></span>
          <span>
            <label class="switchBtn">
              <input type="checkbox" />
              <div class="slide round"></div>
            </label>
          </span>
          <div></div>

          <span className="al-settings">Oline Agents</span>
          <span></span>
          <span>
            <label class="switchBtn">
              <input type="checkbox" />
              <div class="slide round"></div>
            </label>
          </span>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default AgListSet;
