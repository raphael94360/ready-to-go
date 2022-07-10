const SwitchButton = props => {
  return (
    <>
      <div>
        <button
          className={props.switch === true ? "active" : "inactive"}
          onClick={() => {
            {
              props.setSwitch(true)
            }
          }}
        >
          {" "}
          ON{" "}
        </button>
        <button
          className={props.switch === true ? "inactive" : "active"}
          onClick={() => {
            {
              props.setSwitch(false)
            }
          }}
        >
          {" "}
          OFF{" "}
        </button>
      </div>
    </>
  )
}

export default SwitchButton
