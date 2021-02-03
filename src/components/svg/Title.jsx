function TitleSvg(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={241}
      height={58}
      viewBox="0 0 241 58"
      {...props}
    >
      <image
        data-name="root + blush"
        width={241}
        height={58}
        xlinkHref="data:img/png;base64,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"
      />
    </svg>
  );
}


export default TitleSvg;