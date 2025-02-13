function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(
    <container>
    {/* TODO: add rest of programs and figure out how to remember 
    which itmes they selected when it comes to checkboxes (currently the text and select 
    questions are saving their responses but the checkbox ones aren't) */}
    <div className="form-group">
        <p>Do you currently qualify for any of the 
        following programs? Please check any that apply.</p>
        <input 
            className="form-control" 
            id="program1" 
            name="program1" 
            type="checkbox"
            checked={props.program1}
            value={props.program1}
            onChange={props.onChangeProgram1}
        />
        <label htmlFor="program1">
            Child Enrolled in the NSLP (National School Lunch Program)
        </label>
        <br/>
        <input 
            className="form-control" 
            id="program2" 
            name="program2" 
            type="checkbox"
            checked={props.program2}
            value={props.program2}
            onChange={props.onChangeProgram2}
        />
        <label htmlFor="program2">
            CalFresh (food stamps)
        </label>
        <br/>
        <input 
            className="form-control" 
            id="program3" 
            name="program3" 
            type="checkbox"
            checked={props.program3}
            value={props.program3}
            onChange={props.onChangeProgram3}
        />
        <label htmlFor="program2">
            Supplemental Security Income (SSI) or Social Security Disability Insurance (SSDI) Recipient
        </label>
        <br/>
        <input 
            className="form-control" 
            id="program4" 
            name="program4" 
            type="checkbox"
            checked={props.program4}
            value={props.program4}
            onChange={props.onChangeProgram4}
        />
        <label htmlFor="program2">
            Medi-Cal Recipient
        </label>
        <br/>
        <input 
            className="form-control" 
            id="program5" 
            name="program5" 
            type="checkbox"
            checked={props.program5}
            value={props.program5}
            onChange={props.onChangeProgram5}
         />
        <label htmlFor="program2">
            Household Income Under $70,000/year
        </label>
        <br />
        <input 
            className="form-control" 
            id="program6" 
            name="program6" 
            type="checkbox"
            checked={props.program6}
            value={props.program6}
            onChange={props.onChangeProgram6}
         />
        <label htmlFor="program6">
            Supplemental Nutrition Assistance Program (SNAP) Recipient
        </label>
    </div>
    <div className="form-group">
        <label htmlFor="device">
            Do you have a working computing device (such as a desktop, laptop,
            or tablet) at home?
        </label>
        <select 
            className="form-control" 
            id="device" 
            name="device" 
            value={props.device}
            onChange={props.handleChange}
        >
            <option name="yes">Yes</option>
            <option name="no">No</option>
        </select>
    </div> 
    <div className="form-group">
        <p htmlFor="deviceFollowUp">If you answered yes to the previous question, what kind of device(s)
        do you own?
        </p>
        <input 
            className="form-control" 
            id="desktop" 
            name="desktop" 
            type="checkbox"
            checked={props.desktop}
            value={props.desktop}
            onChange={props.onChangeDesktop}
        />
        <label htmlFor="desktop">
            Desktop
        </label>
        <br/>
        <input 
            className="form-control" 
            id="laptop" 
            name="laptop" 
            type="checkbox"
            checked={props.laptop}
            value={props.laptop}
            onChange={props.onChangeLaptop}
        />
        <label htmlFor="laptop">
            Laptop
        </label>
        <br/>
        <input 
            className="form-control" 
            id="tablet" 
            name="tablet" 
            type="checkbox"
            checked={props.tablet}
            value={props.tablet}
            onChange={props.onChangeTablet}
        />
        <label htmlFor="tablet">
            Tablet
        </label>
    </div>
    <div class="form-group">
        <label htmlFor="deviceAmount">How many devices do you have in your home?</label>
        <select 
            className="form-control"
            id="deviceAmount" 
            name="deviceAmount"
            value={props.deviceAmount}
            onChange={props.handleChange}
        >
            <option name="one">1</option>
            <option name="two">2</option>
            <option name="three">3</option>
            <option name="four">4</option>
            <option name="five-or-more">5+</option>
        </select>
    </div>
    <div class="form-group">
        <label htmlFor="smartphone">Do you have a smartphone?</label>
        <select 
            className="form-control"
            id="smartphone" 
            name="smartphone"
            value={props.smartphone}
            onChange={props.handleChange}
        >
            <option name="yes">Yes</option>
            <option name="no">No</option>
        </select>
    </div>
    <p>If you answered yes to the previous question:</p>
    <div class="form-group">
        <label htmlFor="connectsToInternet">Do you use your smartphone to connect to the internet?</label>
        <select 
            className="form-control"
            id="connectsToInternet" 
            name="connectsToInternet"
            value={props.connectsToInternet}
            onChange={props.handleChange}
        >
            <option name="yes">Yes</option>
            <option name="no">No</option>    
        </select>
    </div>
    <div class="form-group">
        <label htmlFor="carrier"> Who is your smartphone carrier?</label>
        <input
            className="form-control"
            id="carrier"
            name="carrier"
            placeholder="Enter name of smartphone carrier"
            type="text"
            value={props.carrier}
            onChange={props.handleChange}
        />
    </div>
    <div class="form-group">
        <label htmlFor="">Do you periodically buy data plans for your smartphone?</label>
        <select 
            className="form-control"
            id="deviceAmount" 
            name="deviceAmount"
            value={props.deviceAmount}
            onChange={props.handleChange}
        >
            <option name="yes">Yes</option>
            <option name="no">No</option>    
        </select>
    </div>
    <div class="form-group">
        <label htmlFor="hotspot">Do you ever use your smartphone as a “hotspot” to connect another
            device to the Internet?</label>
        <select 
            className="form-control"
            id="hotspot" 
            name="hotspot"
            value={props.hotspot}
            onChange={props.handleChange}
        >
            <option name="yes">Yes</option>
            <option name="no">No</option>    
        </select>
    </div>
    </container>
  );
}
export default Step2;