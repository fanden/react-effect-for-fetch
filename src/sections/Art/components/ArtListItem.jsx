function ArtListItem({ art, index }) {
  return (
    <li key={index}>
      <div className="frame">
        <img src={` https://boolean-uk-api-server.fly.dev${art.imageURL}`} />
      </div>
      <h3>{art.title}</h3>
      <p>{art.artist}</p>
      <h4>Publication History:</h4>
      <ul>
        {art.publicationHistory.map((publication, index) => (
          <p key={index}>{publication}</p>
        ))}
      </ul>
    </li>
  );
}

export default ArtListItem;
