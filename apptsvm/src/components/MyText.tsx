const MyText = (props: {content: string}) => {
  const { content } = props;

  return (
    <div>
        {content}
    </div>
  );
}

export default MyText;