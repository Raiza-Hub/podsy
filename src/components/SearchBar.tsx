import { Search } from "lucide-react";


const SearchBar = () => {
    return ( 
        <div className="w-[385px] flex items-center border py-2 px-4 rounded-lg group">
            <Search className="mr-2 w-4 h-4 group-hover:text-gray-500"/>
            <input
                type="text"
                className="w-full outline-none bg-inherit placeholder:text-sm"
                placeholder="Search by artist"
            />
        </div>
     );
}
 
export default SearchBar;