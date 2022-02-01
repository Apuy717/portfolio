import { FC } from "react";

const ProgressBar: FC<{ title: string; bgcolor: string; completed: number }> = ({ title, bgcolor, completed }) => {
  const containerStyles: any = {
    height: 20,
    backgroundColor: "#e0e0de",
    borderRadius: 50,
  };

  const fillerStyles: any = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles: any = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", paddingLeft: 50, paddingRight: 50 }}>
      <div>
        <h3 style={{ color: bgcolor, marginLeft: 5 }}>{title}</h3>
      </div>
      <div>
        <div style={containerStyles}>
          <div style={fillerStyles}>
            <span style={labelStyles}>{`${completed}%`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
