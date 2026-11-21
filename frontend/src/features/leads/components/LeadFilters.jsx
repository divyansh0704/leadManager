import "./LeadFilters.css";

const LeadFilters = ({ search, setSearch, status, setStatus }) => {
  return (
    <div className="lead-filters">
      <input
        type="text"
        placeholder="Search by lead name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="All">All Statuses</option>
        <option value="New">New</option>
        <option value="Contacted">Contacted</option>
        <option value="Qualified">Qualified</option>
        <option value="Lost">Lost</option>
      </select>
    </div>
  );
};

export default LeadFilters;