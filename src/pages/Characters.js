import { useEffect, useState } from "react";
import { get } from "../services/ApiService";

import Pagination from "../components/Pagination";

function Characters() {

    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    const [search, setSearch] = useState('');
    const [sortType, setSortType] = useState('asc');
    const [sortBy, setSortBy] = useState('name');

    const [charactersPerPage, setCharactersPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        const fetchCharacters = async () => {
            const responseData = await get('character', "Error while trying to fetch characters.", { name: search });
            setCharacters(responseData.results);
        };

        const delayDebounceFn = setTimeout(() => {
            fetchCharacters();
        }, 150)

        return () => clearTimeout(delayDebounceFn)
    }, [search]);

    const sortData = (key) => {
        const sorted = [...characters].sort((a, b) => {
            if (sortType === 'asc') {
                return a[key] > b[key] ? 1 : -1;
            } else {
                return a[key] < b[key] ? 1 : -1;
            }
        });
    
        setCharacters(sorted);
        setSortBy(key);
        setSortType(sortType === 'asc' ? 'desc' : 'asc');
    };

    const handleInfoModal = (e, character) => {
        e.preventDefault();
        setSelectedCharacter(character);

        const dialog = document.getElementById('info_modal');
        dialog.showModal();
    }
    

    const indexOfLastCharacter = currentPage * charactersPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
    const currentCharacters = characters.slice(indexOfFirstCharacter, indexOfLastCharacter);

    return (
        <>
            <div className="flex justify-end items-end m-4 gap-4">
                
                <div className="flex flex-col">
                    <label>
                        Characters per page
                    </label>
                    <select className="select select-bordered " onChange={(e) => setCharactersPerPage(e.target.value)}>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                        <option value={20}>20</option>
                    </select>
                </div>
                
                <input type="text" placeholder="Search" className="input input-bordered w-full max-w-xs" onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th onClick={() => sortData('name')}>
                                Name {sortBy === 'name' && <span>{sortType === 'asc' ? '↑' : '↓'}</span>}
                            </th>
                            <th onClick={() => sortData('status')}>
                                Status {sortBy === 'status' && <span>{sortType === 'asc' ? '↑' : '↓'}</span>}
                            </th>
                            <th onClick={() => sortData('location.name')}>
                                Location {sortBy === 'location.name' && <span>{sortType === 'asc' ? '↑' : '↓'}</span>}
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            currentCharacters.map((character, index) => {
                                return (
                                    <tr className="hover" onClick={(e) => handleInfoModal(e, character)} key={character.id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img src={character.image} alt={character.name} />
                                            </div>
                                        </td>
                                        <td>{character.name}</td>
                                        <td>{character.status}</td>
                                        <td>{character.location.name}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <Pagination paginate={paginate} currentPage totalElements={characters.length} elementsPerPage={charactersPerPage} />
            </div>

            
            <dialog id="info_modal" className="modal">
                { selectedCharacter && 
                    <div className="modal-box">
                        <div className="flex justify-around">
                            <div>
                                <p className="py-4 font-bold">{selectedCharacter.name}</p>
                                <div className="mask mask-squircle h-24 w-24">
                                    <img src={selectedCharacter.image} alt={selectedCharacter.name} />
                                </div>
                            </div>
                            <div className="py-4">
                                <p>Status: {selectedCharacter.status}</p>
                                <p>Species: {selectedCharacter.species}</p>
                                <p>Origin: {selectedCharacter.origin.name}</p>
                                <p>Gender: {selectedCharacter.gender}</p>
                                <p>Location: {selectedCharacter.location.name}</p>
                            </div>
                        </div>
                        
                    </div>
                }
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
            </dialog>
        </>
    );
}

export default Characters;
