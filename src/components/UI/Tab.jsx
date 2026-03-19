export default function Tab({ tabs, activeTab, setActiveTab }) {
    
  const active = tabs.find((tab) => tab.key === activeTab) || tabs[0];

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex overflow-x-auto gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-3 border-b-2 whitespace-nowrap transition text-sm sm:text-base ${
              activeTab === tab.key
                ? "border-[#CD0000] text-black font-medium"
                : "border-transparent text-gray-500 hover:text-black hover:border-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-4">
        {active?.content || "Нет данных"}
      </div>
    </div>
  );
}