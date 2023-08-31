export const CastListItem = ({castData}) => {
  const { profile_path: url, name } = castData;
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/original${url}`} alt={`${name}`} width="100"/>
      <h3>{`${name}`}</h3>
    </div>
  )
}