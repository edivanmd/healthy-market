import { useQuery } from "@apollo/client";
import { RiLoader4Line } from 'react-icons/ri';


const QueryVar = ({ children, query, variable }) => {
    const { data, loading, error } = useQuery(query, {
        variables: { queryVar : variable }
    });
    
    if (loading) return <p className="animate-spin m-auto"><RiLoader4Line size={40} /></p>;
    if (error) return <p>Error: {JSON.stringify(error)}</p>;
    
    return children({data});
};
export default QueryVar;