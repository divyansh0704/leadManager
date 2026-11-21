
import { Pencil, Trash2 } from "lucide-react";
import { LeadContext } from "../context/LeadContext";
import { useContext, useState,useEffect } from "react";
import LeadFilters from "./LeadFilters";
import "./LeadTable.css";

const LeadTable = ({ onEdit }) => {
    const { leads, loading, error, removeLead } = useContext(LeadContext);
const leadsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("All");
    const [sortBy, setSortBy] = useState("name");
    const [sortOrder, setSortOrder] = useState("asc");

    useEffect(() => {
        setCurrentPage(1);
    }, [search, status, sortBy, sortOrder]);

    if (loading) return <p>Loading leads...</p>;
    if (error) return <p>{error}</p>;

    const filteredLeads = leads.filter((lead) => {
        const matchesName = lead.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesStatus =
            status === "All" || lead.status === status;

        return matchesName && matchesStatus;
    });

    const sortedLeads = [...filteredLeads].sort((a, b) => {
        let valueA = a[sortBy];
        let valueB = b[sortBy];

        if (sortBy === "createdAt") {
            valueA = new Date(valueA);
            valueB = new Date(valueB);
        } else {
            valueA = valueA.toLowerCase();
            valueB = valueB.toLowerCase();
        }

        if (valueA < valueB) return sortOrder === "asc" ? -1 : 1;
        if (valueA > valueB) return sortOrder === "asc" ? 1 : -1;

        return 0;
    });

    const totalPages = Math.ceil(sortedLeads.length / leadsPerPage);

    const startIndex = (currentPage - 1) * leadsPerPage;
    const endIndex = startIndex + leadsPerPage;

    const currentLeads = sortedLeads.slice(startIndex, endIndex);

    return (<>
        <LeadFilters
            search={search}
            setSearch={setSearch}
            status={status}
            setStatus={setStatus}
        />
        <div className="sorting-controls">
            <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
            >
                <option value="name">Sort by Name</option>
                <option value="createdAt">Sort by Date Added</option>
            </select>

            <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
            >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        </div>
        <div className="lead-table-container">
            <h3>All Leads</h3>

            <table className="lead-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Company</th>
                        <th>Source</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredLeads.length === 0 ? (
                        <tr>
                            <td colSpan="7">No leads found.</td>
                        </tr>
                    ) : (
                        currentLeads.map((lead) => (
                            <tr key={lead._id}>
                                <td>{lead.name}</td>
                                <td>{lead.email}</td>
                                <td>{lead.phone}</td>
                                <td>{lead.company}</td>
                                <td>{lead.source}</td>
                                <td>
                                    <span className={`status ${lead.status.toLowerCase()}`}>
                                        {lead.status}
                                    </span>
                                </td>
                                <td className="actions">
                                    <button type="button" title="Edit lead" onClick={() => onEdit(lead)}>
                                        <Pencil size={16} />
                                    </button>

                                    <button
                                        type="button"
                                        title="Delete lead"
                                        onClick={() => {
                                            if (window.confirm("Are you sure you want to delete this lead?")) {
                                                removeLead(lead._id);
                                            }
                                        }}
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

            <div className="pagination">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                >
                    Previous
                </button>

                <span>
                    Page {currentPage} of {totalPages}
                </span>

                <button
                    disabled={currentPage === totalPages || totalPages === 0}
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    </>
    );
};

export default LeadTable;