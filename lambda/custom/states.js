const states = {
    'CO': 'Colorado',
    'OH': 'Ohio',
    'WA': 'Washington'
};

const oldStates = [
    {StateName: 'Alabama', Abbreviation: 'AL', Capital: 'Montgomery', StatehoodYear: 1819, StatehoodOrder: 22},
    {StateName: 'Alaska', Abbreviation: 'AK', Capital: 'Juneau', StatehoodYear: 1959, StatehoodOrder: 49},
    {StateName: 'Arizona', Abbreviation: 'AZ', Capital: 'Phoenix', StatehoodYear: 1912, StatehoodOrder: 48},
    {StateName: 'Arkansas', Abbreviation: 'AR', Capital: 'Little Rock', StatehoodYear: 1836, StatehoodOrder: 25},
    {StateName: 'California', Abbreviation: 'CA', Capital: 'Sacramento', StatehoodYear: 1850, StatehoodOrder: 31},
    {StateName: 'Colorado', Abbreviation: 'CO', Capital: 'Denver', StatehoodYear: 1876, StatehoodOrder: 38},
    {StateName: 'Connecticut', Abbreviation: 'CT', Capital: 'Hartford', StatehoodYear: 1788, StatehoodOrder: 5},
    {StateName: 'Delaware', Abbreviation: 'DE', Capital: 'Dover', StatehoodYear: 1787, StatehoodOrder: 1},
    {StateName: 'Florida', Abbreviation: 'FL', Capital: 'Tallahassee', StatehoodYear: 1845, StatehoodOrder: 27},
    {StateName: 'Georgia', Abbreviation: 'GA', Capital: 'Atlanta', StatehoodYear: 1788, StatehoodOrder: 4},
    {StateName: 'Hawaii', Abbreviation: 'HI', Capital: 'Honolulu', StatehoodYear: 1959, StatehoodOrder: 50},
    {StateName: 'Idaho', Abbreviation: 'ID', Capital: 'Boise', StatehoodYear: 1890, StatehoodOrder: 43},
    {StateName: 'Illinois', Abbreviation: 'IL', Capital: 'Springfield', StatehoodYear: 1818, StatehoodOrder: 21},
    {StateName: 'Indiana', Abbreviation: 'IN', Capital: 'Indianapolis', StatehoodYear: 1816, StatehoodOrder: 19},
    {StateName: 'Iowa', Abbreviation: 'IA', Capital: 'Des Moines', StatehoodYear: 1846, StatehoodOrder: 29},
    {StateName: 'Kansas', Abbreviation: 'KS', Capital: 'Topeka', StatehoodYear: 1861, StatehoodOrder: 34},
    {StateName: 'Kentucky', Abbreviation: 'KY', Capital: 'Frankfort', StatehoodYear: 1792, StatehoodOrder: 15},
    {StateName: 'Louisiana', Abbreviation: 'LA', Capital: 'Baton Rouge', StatehoodYear: 1812, StatehoodOrder: 18},
    {StateName: 'Maine', Abbreviation: 'ME', Capital: 'Augusta', StatehoodYear: 1820, StatehoodOrder: 23},
    {StateName: 'Maryland', Abbreviation: 'MD', Capital: 'Annapolis', StatehoodYear: 1788, StatehoodOrder: 7},
    {StateName: 'Massachusetts', Abbreviation: 'MA', Capital: 'Boston', StatehoodYear: 1788, StatehoodOrder: 6},
    {StateName: 'Michigan', Abbreviation: 'MI', Capital: 'Lansing', StatehoodYear: 1837, StatehoodOrder: 26},
    {StateName: 'Minnesota', Abbreviation: 'MN', Capital: 'St. Paul', StatehoodYear: 1858, StatehoodOrder: 32},
    {StateName: 'Mississippi', Abbreviation: 'MS', Capital: 'Jackson', StatehoodYear: 1817, StatehoodOrder: 20},
    {StateName: 'Missouri', Abbreviation: 'MO', Capital: 'Jefferson City', StatehoodYear: 1821, StatehoodOrder: 24},
    {StateName: 'Montana', Abbreviation: 'MT', Capital: 'Helena', StatehoodYear: 1889, StatehoodOrder: 41},
    {StateName: 'Nebraska', Abbreviation: 'NE', Capital: 'Lincoln', StatehoodYear: 1867, StatehoodOrder: 37},
    {StateName: 'Nevada', Abbreviation: 'NV', Capital: 'Carson City', StatehoodYear: 1864, StatehoodOrder: 36},
    {StateName: 'New Hampshire', Abbreviation: 'NH', Capital: 'Concord', StatehoodYear: 1788, StatehoodOrder: 9},
    {StateName: 'New Jersey', Abbreviation: 'NJ', Capital: 'Trenton', StatehoodYear: 1787, StatehoodOrder: 3},
    {StateName: 'New Mexico', Abbreviation: 'NM', Capital: 'Santa Fe', StatehoodYear: 1912, StatehoodOrder: 47},
    {StateName: 'New York', Abbreviation: 'NY', Capital: 'Albany', StatehoodYear: 1788, StatehoodOrder: 11},
    {StateName: 'North Carolina', Abbreviation: 'NC', Capital: 'Raleigh', StatehoodYear: 1789, StatehoodOrder: 12},
    {StateName: 'North Dakota', Abbreviation: 'ND', Capital: 'Bismarck', StatehoodYear: 1889, StatehoodOrder: 39},
    {StateName: 'Ohio', Abbreviation: 'OH', Capital: 'Columbus', StatehoodYear: 1803, StatehoodOrder: 17},
    {StateName: 'Oklahoma', Abbreviation: 'OK', Capital: 'Oklahoma City', StatehoodYear: 1907, StatehoodOrder: 46},
    {StateName: 'Oregon', Abbreviation: 'OR', Capital: 'Salem', StatehoodYear: 1859, StatehoodOrder: 33},
    {StateName: 'Pennsylvania', Abbreviation: 'PA', Capital: 'Harrisburg', StatehoodYear: 1787, StatehoodOrder: 2},
    {StateName: 'Rhode Island', Abbreviation: 'RI', Capital: 'Providence', StatehoodYear: 1790, StatehoodOrder: 13},
    {StateName: 'South Carolina', Abbreviation: 'SC', Capital: 'Columbia', StatehoodYear: 1788, StatehoodOrder: 8},
    {StateName: 'South Dakota', Abbreviation: 'SD', Capital: 'Pierre', StatehoodYear: 1889, StatehoodOrder: 40},
    {StateName: 'Tennessee', Abbreviation: 'TN', Capital: 'Nashville', StatehoodYear: 1796, StatehoodOrder: 16},
    {StateName: 'Texas', Abbreviation: 'TX', Capital: 'Austin', StatehoodYear: 1845, StatehoodOrder: 28},
    {StateName: 'Utah', Abbreviation: 'UT', Capital: 'Salt Lake City', StatehoodYear: 1896, StatehoodOrder: 45},
    {StateName: 'Vermont', Abbreviation: 'VT', Capital: 'Montpelier', StatehoodYear: 1791, StatehoodOrder: 14},
    {StateName: 'Virginia', Abbreviation: 'VA', Capital: 'Richmond', StatehoodYear: 1788, StatehoodOrder: 10},
    {StateName: 'Washington', Abbreviation: 'WA', Capital: 'Olympia', StatehoodYear: 1889, StatehoodOrder: 42},
    {StateName: 'West Virginia', Abbreviation: 'WV', Capital: 'Charleston', StatehoodYear: 1863, StatehoodOrder: 35},
    {StateName: 'Wisconsin', Abbreviation: 'WI', Capital: 'Madison', StatehoodYear: 1848, StatehoodOrder: 30},
    {StateName: 'Wyoming', Abbreviation: 'WY', Capital: 'Cheyenne', StatehoodYear: 1890, StatehoodOrder: 44},
  ];

  module.exports = states;