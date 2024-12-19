import useJsonFetch from "./useJsonFetch";

const ViewResult = ({title, url}) => {
    const path = import.meta.env.VITE_API_URL || 'http://localhost:7070';
  
    const [data, loading, error] = useJsonFetch(path + url);
  
    return (
      <div>
        <h2>{title}</h2>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && <p>Data: {JSON.stringify(data)}</p>}
      </div>
    );
  
}

export default ViewResult;