import { useQuery } from "@apollo/client";
import { RiLoader4Line } from 'react-icons/ri';


const Query = ({ children, query }) => {
    const { data, loading, error } = useQuery(query);
    
    if (loading) return <p className="animate-spin m-auto w-fit"><RiLoader4Line size={40} /></p>
    if (error) return <p>Error: {JSON.stringify(error)}</p>;
    return children({data});
};
export default Query;