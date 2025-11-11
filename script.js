// Program Data
const programs = [
    {
        id: 'water',
        icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>`,
        title: 'Clean Water Campaign',
        subtitle: 'Sapang Balen River Revival',
        color: 'bg-blue-50 border-blue-200',
        actions: [
            {
                id: 'w1',
                name: 'River Cleanup Brigade',
                description: 'Organize weekly Saturday cleanups (6-8am)',
                steps: [
                    'Form student teams of 10-15 per cleanup',
                    'Use donated sacks/bags from households',
                    'Document trash types collected (data for science class)',
                    'Create social media campaign (#CleanSapangBalen)',
                    'Partner with barangay for trash disposal'
                ],
                materials: 'Used sacks, gloves from home, borrowed rakes',
                impact: 'Removes 50-100kg trash weekly, prevents river clogging'
            },
            {
                id: 'w2',
                name: 'Free Water Testing Lab',
                description: 'Monthly water quality monitoring using basic biology techniques',
                steps: [
                    'Collect samples in clean reused bottles',
                    'Visual inspection: color, odor, floating debris',
                    'DIY clarity test: Secchi disk from white plastic lid',
                    'Temperature measurement (borrowed thermometer)',
                    'Macroinvertebrate survey: count organisms in samples',
                    'Document findings in science notebooks'
                ],
                materials: 'Reused bottles, white paper, thermometer, magnifying glass',
                impact: 'Track pollution trends, identify hotspots, educate community'
            },
            {
                id: 'w3',
                name: 'Living Plant Filters',
                description: 'Establish free floating wetlands using recycled materials',
                steps: [
                    'Collect water hyacinth (already in river - invasive)',
                    'Bundle into floating mats with bamboo frames',
                    'Add kangkong cuttings from markets (free/donated)',
                    'Anchor in polluted areas using rocks and rope',
                    'Monitor plant growth and water clarity weekly',
                    'Harvest biomass for composting'
                ],
                materials: 'Bamboo scraps, old rope, stones, plant cuttings',
                impact: 'Absorbs nutrients, heavy metals; filters water naturally'
            }
        ]
    },
    {
        id: 'waste',
        icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>`,
        title: 'Zero Waste Movement',
        subtitle: 'From Trash to Treasure',
        color: 'bg-green-50 border-green-200',
        actions: [
            {
                id: 'z1',
                name: 'School Composting Station',
                description: 'Convert cafeteria waste into fertilizer',
                steps: [
                    'Dig 1m x 1m x 1m pit in school garden area',
                    'Layer: dry leaves, food scraps, soil (repeat)',
                    'Add water to keep moist',
                    'Turn weekly with shovel',
                    'Compost ready in 2-3 months',
                    'Use in school garden'
                ],
                materials: 'Borrowed shovel, food waste, dry leaves, old tarp cover',
                impact: 'Diverts 10-20kg waste weekly, produces free fertilizer'
            },
            {
                id: 'z2',
                name: 'Wormery Workshop',
                description: 'Build vermicomposting bins from recycled materials',
                steps: [
                    'Collect earthworms from gardens after rain',
                    'Use old styrobox/plastic containers with drainage holes',
                    'Layer: soil, shredded newspaper, food scraps',
                    'Keep moist and shaded',
                    'Harvest worm castings monthly',
                    'Teach neighbors to replicate'
                ],
                materials: 'Discarded containers, newspaper, garden soil, water',
                impact: '1 bin processes 2kg waste/week; each student teaches 3 families'
            },
            {
                id: 'z3',
                name: 'Plastic-Free Challenge',
                description: '30-day community education campaign',
                steps: [
                    'Survey household plastic use (science project)',
                    'Create posters from cardboard boxes',
                    'House-to-house education (30 min talks)',
                    'Demonstrate alternatives: bayong, reused containers',
                    'Weekly progress reports in barangay hall',
                    'Certificate for participating families'
                ],
                materials: 'Recycled cardboard, markers, printed handouts (school printer)',
                impact: 'Reduce 30-50% single-use plastic in 100+ households'
            }
        ]
    },
    {
        id: 'green',
        icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>`,
        title: 'Green Revolution',
        subtitle: 'Plant for the Future',
        color: 'bg-emerald-50 border-emerald-200',
        actions: [
            {
                id: 'g1',
                name: 'Seed Collection Drive',
                description: 'Build a free community seed bank',
                steps: [
                    'Collect seeds from: markets, trees, donated by residents',
                    'Focus on: balacat, mango, bamboo, vegetables',
                    'Dry seeds on newspaper for 1 week',
                    'Store in labeled envelopes (reused)',
                    'Document: date, location, species',
                    'Distribute free to community'
                ],
                materials: 'Paper bags, envelopes, notebooks, markers',
                impact: 'Preserve native species, free planting materials for all'
            },
            {
                id: 'g2',
                name: 'Guerrilla Gardening',
                description: 'Plant native species in abandoned lots',
                steps: [
                    'Identify safe abandoned areas with barangay permission',
                    'Germinate seeds in cut plastic bottles',
                    'Plant saplings during rainy season',
                    'Weekly watering using collected rainwater',
                    'Install "Planted by [School Name]" signs from cardboard',
                    'Monitor survival rates (science data)'
                ],
                materials: 'Cut bottles, soil from site, saved seeds, rainwater',
                impact: '50-100 trees planted yearly, reduce heat, restore biodiversity'
            },
            {
                id: 'g3',
                name: 'Living Classroom',
                description: 'Transform school grounds into food forest',
                steps: [
                    'Map school area and identify sunny spots',
                    'Plant papaya, banana, malunggay (fast-growing)',
                    'Add herbs: oregano, tanglad, sambong',
                    'Use school food waste as fertilizer',
                    'Label all plants (science learning)',
                    'Harvest for school feeding program'
                ],
                materials: 'Donated seedlings, food waste compost, cardboard labels',
                impact: 'Free food, outdoor classroom, oxygen production'
            }
        ]
    },
    {
        id: 'health',
        icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>`,
        title: 'Health & Sanitation',
        subtitle: 'Community Wellness Drive',
        color: 'bg-red-50 border-red-200',
        actions: [
            {
                id: 'h1',
                name: 'Tipid-Tubig Campaign',
                description: 'Water conservation education program',
                steps: [
                    'Create survey: household water use habits',
                    'Door-to-door demonstrations (weekends)',
                    'Show water-saving techniques (collect tabo water, etc.)',
                    'Distribute printed tips (school printer)',
                    'Follow-up after 2 weeks',
                    'Award "Water Saver Family" certificates'
                ],
                materials: 'Survey forms, printed flyers, cardboard certificates',
                impact: 'Save 20-30% water per household, reduce contaminated runoff'
            },
            {
                id: 'h2',
                name: 'Dengue Destroyer Squad',
                description: 'Biological mosquito control using natural methods',
                steps: [
                    'Weekly search-and-destroy: stagnant water',
                    'Add salt to water containers (mosquito-proof)',
                    'Plant mosquito-repelling: tanglad, oregano, marigold',
                    'Collect BTI sachets from barangay health center (free)',
                    'Teach neighbors to check tires, bottles, cans',
                    'Map dengue hotspots (biology project)'
                ],
                materials: 'Salt (from households), free BTI, plant cuttings, maps',
                impact: 'Reduce mosquito breeding sites by 60-80%, prevent disease'
            },
            {
                id: 'h3',
                name: 'Herbal Medicine Garden',
                description: 'Grow DOH-approved medicinal plants',
                steps: [
                    'Collect cuttings: sambong, lagundi, yerba buena, bawang',
                    'Plant in reused containers around community',
                    'Label with uses and preparation methods',
                    'Create illustrated guides (art class project)',
                    'Hold monthly harvesting and processing demo',
                    'Distribute dried herbs to elderly'
                ],
                materials: 'Plant cuttings (donated), recycled containers, cardboard signs',
                impact: 'Free medicine access, reduce healthcare costs, preserve knowledge'
            }
        ]
    },
    {
        id: 'education',
        icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>`,
        title: 'Eco-Education Hub',
        subtitle: 'Knowledge is Power',
        color: 'bg-purple-50 border-purple-200',
        actions: [
            {
                id: 'e1',
                name: 'BioBlitz Expedition',
                description: 'Document all species in the barangay',
                steps: [
                    'Form teams: plants, insects, birds, aquatic life',
                    'Use smartphones to photograph species',
                    'Upload to iNaturalist (free app)',
                    'Create community biodiversity map',
                    'Present findings in barangay assembly',
                    'Publish in school newspaper'
                ],
                materials: 'Smartphones, notebooks, borrowed field guides',
                impact: 'Baseline data for conservation, student research experience'
            },
            {
                id: 'e2',
                name: 'Eco-Warriors Training',
                description: 'Peer-to-peer environmental education',
                steps: [
                    'Select 2 students per class as Eco-Warriors',
                    'Weekly 30-min training (lunch break)',
                    'Topics: waste segregation, water conservation, composting',
                    'Warriors teach their classes weekly',
                    'Create competition: cleanest classroom',
                    'Best warriors teach in elementary schools'
                ],
                materials: 'Printed training modules, poster boards from boxes',
                impact: 'Multiply impact: 20 warriors teach 600+ students'
            },
            {
                id: 'e3',
                name: 'Science Fair Showcase',
                description: 'Annual environment-focused research fair',
                steps: [
                    'Students can conduct action researches',
                    'Topics: local pollution, native species, solutions tested',
                    'Use data from ongoing projects',
                    'Present to community and LGU',
                    'Invite local media for coverage',
                    'Winners present to City Council'
                ],
                materials: 'Research data, recycled poster boards, school venue',
                impact: 'Evidence-based solutions, student empowerment, policy influence'
            }
        ]
    }
];

// Track completed actions
let completedActions = {};

// Toggle section expand/collapse
function toggleSection(sectionId) {
    const content = document.getElementById(`content-${sectionId}`);
    const chevron = document.getElementById(`chevron-${sectionId}`);
    
    if (content.classList.contains('section-collapsed')) {
        content.classList.remove('section-collapsed');
        content.classList.add('section-expanded');
        chevron.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>`;
    } else {
        content.classList.remove('section-expanded');
        content.classList.add('section-collapsed');
        chevron.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>`;
    }
}

// Toggle action completion
function toggleAction(actionId) {
    completedActions[actionId] = !completedActions[actionId];
    const checkbox = document.getElementById(`check-${actionId}`);
    
    if (completedActions[actionId]) {
        checkbox.innerHTML = `<svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
    } else {
        checkbox.innerHTML = `<svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="2"></circle></svg>`;
    }
}

// Render programs
function renderPrograms() {
    const container = document.getElementById('programs-container');
    
    programs.forEach(program => {
        const programHTML = `
            <div class="${program.color} border-2 rounded-lg shadow-md mb-4">
                <button onclick="toggleSection('${program.id}')" class="w-full p-6 flex items-center justify-between hover:bg-opacity-70 transition-all">
                    <div class="flex items-center gap-4">
                        <div class="text-gray-700">${program.icon}</div>
                        <div class="text-left">
                            <h2 class="text-xl font-bold text-gray-800">${program.title}</h2>
                            <p class="text-sm text-gray-600">${program.subtitle}</p>
                        </div>
                    </div>
                    <div id="chevron-${program.id}" class="text-gray-600">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </button>

                <div id="content-${program.id}" class="section-collapsed px-6 pb-6 space-y-4">
                    ${program.actions.map(action => `
                        <div class="bg-white rounded-lg p-5 shadow">
                            <div class="flex items-start gap-3">
                                <button onclick="toggleAction('${action.id}')" class="mt-1 flex-shrink-0" id="check-${action.id}">
                                    <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="2"></circle></svg>
                                </button>
                                
                                <div class="flex-1">
                                    <h3 class="text-lg font-bold text-gray-800 mb-1">${action.name}</h3>
                                    <p class="text-gray-600 mb-3">${action.description}</p>
                                    
                                    <div class="mb-3">
                                        <div class="font-semibold text-sm text-gray-700 mb-2">📋 Step-by-Step:</div>
                                        <ol class="list-decimal list-inside space-y-1 text-sm text-gray-600">
                                            ${action.steps.map(step => `<li>${step}</li>`).join('')}
                                        </ol>
                                    </div>
                                    
                                    <div class="grid md:grid-cols-2 gap-3 text-sm">
                                        <div class="bg-amber-50 p-3 rounded border border-amber-200">
                                            <div class="font-semibold text-amber-800 mb-1">🔧 Materials:</div>
                                            <div class="text-gray-700">${action.materials}</div>
                                        </div>
                                        <div class="bg-green-50 p-3 rounded border border-green-200">
                                            <div class="font-semibold text-green-800 mb-1">🎯 Impact:</div>
                                            <div class="text-gray-700">${action.impact}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        container.innerHTML += programHTML;
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', renderPrograms);