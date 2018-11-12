import * as React from "react"

const style = require("./caption.style.scss");


export const CaptionComponent = () => (
  <div className={style.caption}>
    <p className={style.title}>Documents Revealed</p>
    <p className={style.subtitle}>Unlock Your Files</p>
  </div>
);