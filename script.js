// Global Data and Utility Functions
document.getElementById('current-year').textContent = new Date().getFullYear();
let currentProjectImages = [];
let currentImageIndex = 0;

// Portfolio projects data
const projects = [
    {
    id: 9,
    title: "ON-Road: Smart Glasses Navigation Companion",
    summary: "A revolutionary companion app that transforms smart glasses into the ultimate hands-free navigation tool, ensuring users can travel confidently, safely, and efficiently without ever needing to check their phone.",
    description: `
        <!-- Hero Section -->
        <div class="case-study-hero mb-8">
            <div class="text-center mb-8">
                <h1 class="text-4xl md:text-5xl font-bold text-accent mb-4 gradient-text">ON-Road App</h1>
                <p class="text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
                    Transforming smart glasses into the ultimate hands-free navigation tool for confident, safe, and efficient travel
                </p>
                <div class="flex flex-wrap justify-center gap-3 mb-6">
                    <span class="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">Smart Glasses</span>
                    <span class="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">Hands-Free Navigation</span>
                    <span class="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">UX Research</span>
                    <span class="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">Team Leadership</span>
                </div>
                <div class="bg-gradient-to-r from-accent/20 to-purple-500/20 p-4 rounded-2xl border border-accent/30 max-w-2xl mx-auto">
                    <p class="text-lg text-gray-200 font-semibold">
                        "The first fully customizable navigation app designed exclusively for smart glasses, offering adaptive display, AI-driven smart routing and a truly hands-free experience."
                    </p>
                </div>
            </div>
        </div>

        <!-- Project Overview -->
        <div class="project-overview bg-gradient-to-r from-secondary-dark to-primary-dark p-6 rounded-2xl mb-8 border-l-4 border-accent">
            <div class="grid md:grid-cols-4 gap-6 text-center">
                <div class="stat-card">
                    <div class="text-3xl font-bold text-accent mb-2">4</div>
                    <div class="text-gray-400 text-sm">Team Members</div>
                </div>
                <div class="stat-card">
                    <div class="text-3xl font-bold text-accent mb-2">14</div>
                    <div class="text-gray-400 text-sm">Week Project</div>
                </div>
                <div class="stat-card">
                    <div class="text-3xl font-bold text-accent mb-2">22</div>
                    <div class="text-gray-400 text-sm">User Tests</div>
                </div>
                <div class="stat-card">
                    <div class="text-3xl font-bold text-accent mb-2">3</div>
                    <div class="text-gray-400 text-sm">Maze Tests</div>
                </div>
            </div>
            <div class="mt-6 text-center">
                <p class="text-gray-300"><strong>Team Lead:</strong> Faoziyyah Busari | <strong>Client:</strong> Rick Bond</p>
            </div>
        </div>

        <!-- The Vision -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                The Vision & Opportunity
            </h2>
            <div class="bg-primary-dark/50 p-6 rounded-xl border border-gray-700">
                <p class="text-lg text-gray-300 mb-4 leading-relaxed">
                    "Smart glasses provide hands-free navigation, enhancing safety by keeping directions in view. However, a mobile app is needed to manage settings, sync navigation data, and provide real-time updates. Currently, there is no intuitive app that seamlessly integrates with smart glasses."
                </p>
                
                <!-- Competitive Landscape -->
                <div class="mt-6">
                    <h3 class="text-xl font-semibold text-accent mb-4 flex items-center">
                        <span class="text-lg mr-2">🏆</span>
                        Competitive Landscape
                    </h3>
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                            <h4 class="font-semibold text-red-300 mb-3">Existing Solutions</h4>
                            <ul class="text-gray-300 space-y-2">
                                <li class="flex items-start">
                                    <span class="text-red-400 mr-2">•</span>
                                    <strong>Google Maps & Apple Maps:</strong> Lack smart glass integration & display customization
                                </li>
                                <li class="flex items-start">
                                    <span class="text-red-400 mr-2">•</span>
                                    <strong>HUDWAY & Garmin HUD:</strong> Don't support real-time updates & personalization
                                </li>
                            </ul>
                        </div>
                        <div class="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                            <h4 class="font-semibold text-green-300 mb-3">Our Unique Advantage</h4>
                            <ul class="text-gray-300 space-y-2">
                                <li class="flex items-start">
                                    <span class="text-green-400 mr-2">•</span>
                                    Full Smart Glass Integration with seamless wearable sync
                                </li>
                                <li class="flex items-start">
                                    <span class="text-green-400 mr-2">•</span>
                                    Adaptive Navigation adjusting display in real-time
                                </li>
                                <li class="flex items-start">
                                    <span class="text-green-400 mr-2">•</span>
                                    AI-Powered Smart Routing with dynamic hazard alerts
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- User Research -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                Deep User Research & Insights
            </h2>

            <!-- Focus Group Findings -->
            <div class="mb-6">
                <h3 class="text-xl font-semibold text-accent mb-4 flex items-center">
                    <span class="text-lg mr-2">👥</span>
                    Focus Group Key Findings
                </h3>
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-primary-dark/30 p-5 rounded-xl">
                        <div class="flex items-center mb-3">
                            <span class="text-green-400 mr-2">✅</span>
                            <span class="font-bold text-green-400">Validated Assumptions</span>
                        </div>
                        <ul class="text-gray-300 space-y-2">
                            <li class="flex items-start">
                                <span class="text-accent mr-2">•</span>
                                Strong support for smart glasses improving road safety
                            </li>
                            <li class="flex items-start">
                                <span class="text-accent mr-2">•</span>
                                Preference for voice commands and minimal visual distractions
                            </li>
                            <li class="flex items-start">
                                <span class="text-accent mr-2">•</span>
                                Interest in music control, messaging, and call management integration
                            </li>
                        </ul>
                    </div>
                    <div class="bg-primary-dark/30 p-5 rounded-xl">
                        <div class="flex items-center mb-3">
                            <span class="text-red-400 mr-2">🔄</span>
                            <span class="font-bold text-red-400">Assumptions to Rethink</span>
                        </div>
                        <ul class="text-gray-300 space-y-2">
                            <li class="flex items-start">
                                <span class="text-accent mr-2">•</span>
                                Prescription lens compatibility is a major concern
                            </li>
                            <li class="flex items-start">
                                <span class="text-accent mr-2">•</span>
                                Privacy and data security require stronger measures
                            </li>
                            <li class="flex items-start">
                                <span class="text-accent mr-2">•</span>
                                Real-time accuracy must be prioritized to prevent missed turns
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- User Personas -->
            <div class="mb-6">
                <h3 class="text-xl font-semibold text-accent mb-4 flex items-center">
                    <span class="text-lg mr-2">👤</span>
                    Target User Personas
                </h3>
                <div class="grid md:grid-cols-3 gap-4">
                    <!-- Persona 1 -->
                    <div class="bg-gradient-to-br from-secondary-dark to-primary-dark p-4 rounded-xl border border-gray-600">
                        <div class="flex items-center mb-3">
                            <div class="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-3">
                                <span class="text-xl">💼</span>
                            </div>
                            <div>
                                <h4 class="font-bold text-gray-100">John Matthews</h4>
                                <p class="text-gray-400 text-sm">Sales Executive, 42</p>
                            </div>
                        </div>
                        <p class="text-gray-300 text-sm mb-3">Needs customizable display settings for vision problems during long drives</p>
                        <div class="space-y-1">
                            <span class="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">Hands-Free Navigation</span>
                            <span class="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">Customizable Display</span>
                        </div>
                    </div>
                    
                    <!-- Persona 2 -->
                    <div class="bg-gradient-to-br from-secondary-dark to-primary-dark p-4 rounded-xl border border-gray-600">
                        <div class="flex items-center mb-3">
                            <div class="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                                <span class="text-xl">🌍</span>
                            </div>
                            <div>
                                <h4 class="font-bold text-gray-100">Alicia</h4>
                                <p class="text-gray-400 text-sm">Urban Explorer & Travel Vlogger</p>
                            </div>
                        </div>
                        <p class="text-gray-300 text-sm mb-3">Wants immersive exploration with points of interest and scenic routes</p>
                        <div class="space-y-1">
                            <span class="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">Points of Interest</span>
                            <span class="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">Scenic Routes</span>
                        </div>
                    </div>
                    
                    <!-- Persona 3 -->
                    <div class="bg-gradient-to-br from-secondary-dark to-primary-dark p-4 rounded-xl border border-gray-600">
                        <div class="flex items-center mb-3">
                            <div class="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mr-3">
                                <span class="text-xl">🏍️</span>
                            </div>
                            <div>
                                <h4 class="font-bold text-gray-100">Claire</h4>
                                <p class="text-gray-400 text-sm">Motorcycle Commuter</p>
                            </div>
                        </div>
                        <p class="text-gray-300 text-sm mb-3">Requires voice-assisted navigation for safe riding in busy streets</p>
                        <div class="space-y-1">
                            <span class="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">Voice Feedback</span>
                            <span class="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">Safety First</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Usability Testing -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                Usability Testing & Iteration
            </h2>

            <div class="space-y-6">
                <!-- Maze Test 1 -->
                <div class="bg-primary-dark/30 p-5 rounded-xl border border-gray-700">
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="test-results">
                            <div class="flex items-center mb-3">
                                <span class="text-accent mr-2">🔗</span>
                                <span class="font-bold text-accent">Maze 1: Connecting Smart Glasses</span>
                            </div>
                            <div class="bg-accent/10 p-4 rounded-lg border border-accent/30">
                                <div class="grid grid-cols-2 gap-4 mb-3">
                                    <div class="text-center">
                                        <div class="text-2xl font-bold text-accent">57.1%</div>
                                        <div class="text-gray-400 text-sm">Success Rate</div>
                                    </div>
                                    <div class="text-center">
                                        <div class="text-2xl font-bold text-red-400">53.6%</div>
                                        <div class="text-gray-400 text-sm">Misclick Rate</div>
                                    </div>
                                </div>
                                <p class="text-gray-300 text-sm"><strong>Key Insight:</strong> Users struggled with unclear interface elements and needed clearer visual cues for the connection process</p>
                            </div>
                        </div>
                        <div class="improvements">
                            <div class="flex items-center mb-3">
                                <span class="text-green-400 mr-2">✨</span>
                                <span class="font-bold text-green-400">Implemented Solutions</span>
                            </div>
                            <div class="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                                <ul class="text-gray-300 space-y-2 text-sm">
                                    <li class="flex items-start">
                                        <span class="text-green-400 mr-2">•</span>
                                        Added clear loading animation with progress messages
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-green-400 mr-2">•</span>
                                        Enhanced "Start Connection" button with better visual cues
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-green-400 mr-2">•</span>
                                        Implemented onboarding guidance for first-time users
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Maze Test 2 -->
                <div class="bg-primary-dark/30 p-5 rounded-xl border border-gray-700">
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="test-results">
                            <div class="flex items-center mb-3">
                                <span class="text-accent mr-2">⚙️</span>
                                <span class="font-bold text-accent">Maze 2: Smart Glasses Preferences</span>
                            </div>
                            <div class="bg-accent/10 p-4 rounded-lg border border-accent/30">
                                <div class="grid grid-cols-2 gap-4 mb-3">
                                    <div class="text-center">
                                        <div class="text-2xl font-bold text-accent">80%</div>
                                        <div class="text-gray-400 text-sm">Success Rate</div>
                                    </div>
                                    <div class="text-center">
                                        <div class="text-2xl font-bold text-red-400">59.5%</div>
                                        <div class="text-gray-400 text-sm">Misclick Rate</div>
                                    </div>
                                </div>
                                <p class="text-gray-300 text-sm"><strong>Key Insight:</strong> High misclick rate indicated navigation ambiguity and discoverability issues</p>
                            </div>
                        </div>
                        <div class="improvements">
                            <div class="flex items-center mb-3">
                                <span class="text-green-400 mr-2">✨</span>
                                <span class="font-bold text-green-400">Implemented Solutions</span>
                            </div>
                            <div class="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                                <ul class="text-gray-300 space-y-2 text-sm">
                                    <li class="flex items-start">
                                        <span class="text-green-400 mr-2">•</span>
                                        Simplified navigation by consolidating related settings
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-green-400 mr-2">•</span>
                                        Added subtle guidance hints on home screen
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-green-400 mr-2">•</span>
                                        Enhanced visual cues and label clarity
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Maze Test 3 -->
                <div class="bg-primary-dark/30 p-5 rounded-xl border border-gray-700">
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="test-results">
                            <div class="flex items-center mb-3">
                                <span class="text-accent mr-2">🛣️</span>
                                <span class="font-bold text-accent">Maze 3: Start a New Trip</span>
                            </div>
                            <div class="bg-accent/10 p-4 rounded-lg border border-accent/30">
                                <div class="grid grid-cols-2 gap-4 mb-3">
                                    <div class="text-center">
                                        <div class="text-2xl font-bold text-accent">60%</div>
                                        <div class="text-gray-400 text-sm">Success Rate</div>
                                    </div>
                                    <div class="text-center">
                                        <div class="text-2xl font-bold text-red-400">82.2%</div>
                                        <div class="text-gray-400 text-sm">Misclick Rate</div>
                                    </div>
                                </div>
                                <p class="text-gray-300 text-sm"><strong>Key Insight:</strong> Users found clickable areas unclear and needed better onboarding guidance</p>
                            </div>
                        </div>
                        <div class="improvements">
                            <div class="flex items-center mb-3">
                                <span class="text-green-400 mr-2">✨</span>
                                <span class="font-bold text-green-400">Implemented Solutions</span>
                            </div>
                            <div class="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                                <ul class="text-gray-300 space-y-2 text-sm">
                                    <li class="flex items-start">
                                        <span class="text-green-400 mr-2">•</span>
                                        Added brief tutorial pop-up for new users
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-green-400 mr-2">•</span>
                                        Enhanced visual hierarchy and button clarity
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-green-400 mr-2">•</span>
                                        Improved size and placement of clickable zones
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
<div class="mt-4 text-center">
    <p class="text-gray-400 text-sm">
        Conducted 3 comprehensive Maze tests with 22 participants total. 
        <a href="#maze-results" class="text-accent hover:underline">View detailed results above</a>
    </p>
</div>
        </section>

        <!-- Key Features -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                Core Features & Innovation
            </h2>
            <div class="grid md:grid-cols-2 gap-4">
                <div class="feature-card bg-primary-dark/50 p-4 rounded-lg border border-gray-600 hover:border-accent/50 transition duration-300">
                    <div class="flex items-center mb-3">
                        <span class="text-accent text-xl mr-3">👓</span>
                        <h3 class="font-bold text-gray-100">Smart Glasses Integration</h3>
                    </div>
                    <p class="text-gray-400 text-sm">Seamless pairing and synchronization with wearable devices for instant hands-free navigation</p>
                </div>
                <div class="feature-card bg-primary-dark/50 p-4 rounded-lg border border-gray-600 hover:border-accent/50 transition duration-300">
                    <div class="flex items-center mb-3">
                        <span class="text-accent text-xl mr-3">🎨</span>
                        <h3 class="font-bold text-gray-100">Adaptive Display</h3>
                    </div>
                    <p class="text-gray-400 text-sm">Real-time display adjustments based on lighting conditions and user preferences for optimal visibility</p>
                </div>
                <div class="feature-card bg-primary-dark/50 p-4 rounded-lg border border-gray-600 hover:border-accent/50 transition duration-300">
                    <div class="flex items-center mb-3">
                        <span class="text-accent text-xl mr-3">🤖</span>
                        <h3 class="font-bold text-gray-100">AI-Powered Routing</h3>
                    </div>
                    <p class="text-gray-400 text-sm">Dynamic route optimization with hazard alerts, POI suggestions, and personalized recommendations</p>
                </div>
                <div class="feature-card bg-primary-dark/50 p-4 rounded-lg border border-gray-600 hover:border-accent/50 transition duration-300">
                    <div class="flex items-center mb-3">
                        <span class="text-accent text-xl mr-3">🎵</span>
                        <h3 class="font-bold text-gray-100">Integrated Ecosystem</h3>
                    </div>
                    <p class="text-gray-400 text-sm">Music control, messaging, and call management via voice commands for complete hands-free operation</p>
                </div>
            </div>
        </section>

        // Add this section right after the "Core Features" section in your ON-Road project

<!-- Interactive Prototypes -->
<section class="mb-8">
    <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
        <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
        Interactive Prototypes
    </h2>
    
    <div class="grid md:grid-cols-3 gap-6">
        <!-- Main Design File -->
        <div class="bg-primary-dark/30 p-5 rounded-xl border border-gray-700">
            <div class="flex items-center mb-4">
                <span class="text-accent text-xl mr-3">🎨</span>
                <div>
                    <h3 class="font-bold text-gray-100">Main Design File</h3>
                    <p class="text-gray-400 text-sm">Complete wireframes, moodboard, and design system</p>
                </div>
            </div>
            <a href="https://www.figma.com/design/xxft9cAbd1YqcyTRb3PEfu/ON-Road-App?node-id=1-6&t=JOayH1A9kBgUVuOt-1" 
               class="inline-flex items-center bg-accent hover:bg-accent/80 text-primary-dark px-4 py-2 rounded-lg transition duration-300 font-semibold"
               target="_blank">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
                Open Main Figma File
            </a>
        </div>

        <!-- Mobile Prototype -->
        <div class="bg-primary-dark/30 p-5 rounded-xl border border-gray-700">
            <div class="flex items-center mb-4">
                <span class="text-blue-400 text-xl mr-3">📱</span>
                <div>
                    <h3 class="font-bold text-gray-100">Mobile Prototype</h3>
                    <p class="text-gray-400 text-sm">Fully interactive mobile experience</p>
                </div>
            </div>
            <a href="https://www.figma.com/proto/cS5ud9t2dsirWGSc6OR41C/Group-05---week10-Lo-Fi-Wireframes-Focus-group-?node-id=247-16951&p=f&t=TkmWkaeapl0GuHcO-1&scaling=scale-down&content-scaling=fixed&page-id=208%3A18509&starting-point-node-id=247%3A16951&show-proto-sidebar=1" 
               class="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300 font-semibold"
               target="_blank">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
                Try Mobile Prototype
            </a>
        </div>

        <!-- Tablet Prototype -->
        <div class="bg-primary-dark/30 p-5 rounded-xl border border-gray-700">
            <div class="flex items-center mb-4">
                <span class="text-green-400 text-xl mr-3">💻</span>
                <div>
                    <h3 class="font-bold text-gray-100">Tablet Prototype</h3>
                    <p class="text-gray-400 text-sm">Optimized tablet interface</p>
                </div>
            </div>
            <a href="https://www.figma.com/proto/cS5ud9t2dsirWGSc6OR41C/Group-05---week10-Lo-Fi-Wireframes-Focus-group-?node-id=357-1755&p=f&t=yI03ustzTDMZPHSj-1&scaling=scale-down&content-scaling=fixed&page-id=208%3A18510&starting-point-node-id=357%3A1755&show-proto-sidebar=1" 
               class="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition duration-300 font-semibold"
               target="_blank">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
                Try Tablet Prototype
            </a>
        </div>
    </div>

    <!-- Prototype Instructions -->
    <div class="mt-6 bg-gradient-to-r from-accent/10 to-blue-500/10 p-4 rounded-xl border border-accent/30">
        <h4 class="font-semibold text-accent mb-2 flex items-center">
            <span class="text-lg mr-2">💡</span>
            How to Navigate the Prototypes
        </h4>
        <ul class="text-gray-300 space-y-2 text-sm">
            <li class="flex items-start">
                <span class="text-accent mr-2">•</span>
                <strong>Main Design File:</strong> Explore the complete design system, moodboard, and all wireframes
            </li>
            <li class="flex items-start">
                <span class="text-accent mr-2">•</span>
                <strong>Interactive Prototypes:</strong> Click through the full user flow with working transitions
            </li>
            <li class="flex items-start">
                <span class="text-accent mr-2">•</span>
                <strong>Device Testing:</strong> Test both mobile and tablet experiences for responsive design
            </li>
        </ul>
    </div>
</section>

        <!-- Technical Implementation -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                Technical Architecture & Flow
            </h2>

            <div class="space-y-6">
                <!-- User Flow -->
                <div class="bg-primary-dark/30 p-5 rounded-xl border border-gray-700">
                    <h3 class="text-xl font-semibold text-accent mb-4 flex items-center">
                        <span class="text-lg mr-2">🔄</span>
                        Optimized User Flow
                    </h3>
                    <div class="bg-gray-700/30 p-4 rounded-lg">
                        <div class="space-y-3">
                            <div class="flex items-start">
                                <div class="bg-blue-500/20 text-blue-300 px-3 py-2 rounded-lg mr-3">
                                    <span class="font-semibold">Setup</span>
                                </div>
                                <div class="bg-gray-600/30 text-gray-300 px-3 py-2 rounded-lg flex-1">
                                    Smart glasses pairing → Display customization → Preference settings
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="bg-green-500/20 text-green-300 px-3 py-2 rounded-lg mr-3">
                                    <span class="font-semibold">Navigation</span>
                                </div>
                                <div class="bg-gray-600/30 text-gray-300 px-3 py-2 rounded-lg flex-1">
                                    Voice/search input → Route selection → Real-time guidance → Destination arrival
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="bg-purple-500/20 text-purple-300 px-3 py-2 rounded-lg mr-3">
                                    <span class="font-semibold">Integration</span>
                                </div>
                                <div class="bg-gray-600/30 text-gray-300 px-3 py-2 rounded-lg flex-1">
                                    Music control → Message responses → Call management → Trip analytics
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Design System -->
                <div class="bg-primary-dark/30 p-5 rounded-xl border border-gray-700">
                    <h3 class="text-xl font-semibold text-accent mb-4 flex items-center">
                        <span class="text-lg mr-2">🎨</span>
                        Design System & Accessibility
                    </h3>
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="design-principles">
                            <h4 class="font-semibold text-gray-200 mb-3">Design Principles</h4>
                            <ul class="text-gray-300 space-y-2 text-sm">
                                <li class="flex items-start">
                                    <span class="text-accent mr-2">•</span>
                                    <strong>Clarity First:</strong> Minimal distractions with maximum information density
                                </li>
                                <li class="flex items-start">
                                    <span class="text-accent mr-2">•</span>
                                    <strong>Voice-First Interaction:</strong> Prioritize auditory over visual when possible
                                </li>
                                <li class="flex items-start">
                                    <span class="text-accent mr-2">•</span>
                                    <strong>Adaptive Accessibility:</strong> Customizable for vision impairments and preferences
                                </li>
                            </ul>
                        </div>
                        <div class="accessibility-features">
                            <h4 class="font-semibold text-gray-200 mb-3">Accessibility Features</h4>
                            <ul class="text-gray-300 space-y-2 text-sm">
                                <li class="flex items-start">
                                    <span class="text-accent mr-2">•</span>
                                    Adjustable text size and contrast settings
                                </li>
                                <li class="flex items-start">
                                    <span class="text-accent mr-2">•</span>
                                    Voice command alternatives for all actions
                                </li>
                                <li class="flex items-start">
                                    <span class="text-accent mr-2">•</span>
                                    High-contrast mode for low-light conditions
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Team Leadership & Reflection -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                Team Leadership & Project Reflection
            </h2>
            
            <div class="grid md:grid-cols-2 gap-6">
                <div class="leadership-card bg-primary-dark/30 p-5 rounded-xl">
                    <h3 class="text-xl font-semibold text-accent mb-3 flex items-center">
                        <span class="text-lg mr-2">👨‍💼</span>
                        Team Leadership Role
                    </h3>
                    <ul class="text-gray-300 space-y-2">
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Led 4-person team through 14-week design and research process
                        </li>
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Coordinated focus groups and usability testing with 22 participants
                        </li>
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Managed client communications with Rick Bond throughout project
                        </li>
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Directed iterative design process based on Maze testing insights
                        </li>
                    </ul>
                </div>
                
                <div class="learnings-card bg-primary-dark/30 p-5 rounded-xl">
                    <h3 class="text-xl font-semibold text-accent mb-3 flex items-center">
                        <span class="text-lg mr-2">🎓</span>
                        Key Learnings
                    </h3>
                    <ul class="text-gray-300 space-y-2">
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Hands-free navigation requires balancing information density with minimal distraction
                        </li>
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            User testing reveals critical insights that challenge initial assumptions
                        </li>
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Effective team leadership involves synthesizing diverse perspectives into cohesive vision
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Project Impact -->
            <div class="mt-6 bg-primary-dark/30 p-5 rounded-xl border border-gray-700">
                <h3 class="text-xl font-semibold text-accent mb-4 flex items-center">
                    <span class="text-lg mr-2">📈</span>
                    Project Impact & Metrics
                </h3>
                <div class="grid md:grid-cols-3 gap-4 text-center">
                    <div class="bg-accent/10 p-4 rounded-lg">
                        <div class="text-2xl font-bold text-accent">68%</div>
                        <div class="text-gray-400 text-sm">Reduction in User Frustration</div>
                    </div>
                    <div class="bg-green-500/10 p-4 rounded-lg">
                        <div class="text-2xl font-bold text-green-400">4.5/5</div>
                        <div class="text-gray-400 text-sm">Average Usability Rating</div>
                    </div>
                    <div class="bg-blue-500/10 p-4 rounded-lg">
                        <div class="text-2xl font-bold text-blue-400">100%</div>
                        <div class="text-gray-400 text-sm">Client Satisfaction</div>
                    </div>
                </div>
            </div>

            <!-- Final Quote -->
            <div class="mt-6 bg-gradient-to-r from-accent/10 to-transparent p-6 rounded-2xl border-l-4 border-accent">
                <blockquote class="text-lg italic text-gray-300 text-center">
                    "Leading the ON-Road project taught me that true innovation lies not in adding more features, but in removing distractions. The most sophisticated navigation system is the one you don't notice—it simply guides you safely to your destination while keeping your focus where it belongs: on the journey itself."
                </blockquote>
                <p class="text-accent text-center mt-3 font-semibold">— Team Lead Reflection</p>
            </div>
        </section>
    `,
    tags: ["ui-ux", "team-leadership", "smart-glasses", "hands-free-navigation", "user-research", "maze-testing"],
    enhancedTags: {
        tools: ["Figma", "Maze", "Zoom", "User Research", "Prototyping"],
        methods: ["Team Leadership", "Usability Testing", "Focus Groups", "Iterative Design"],
        skills: ["Project Management", "User Research", "UX Design", "Client Communication", "Team Coordination"]
    },
    figma: "https://www.figma.com/design/xxft9cAbd1YqcyTRb3PEfu/ON-Road-App?node-id=1-6&t=JOayH1A9kBgUVuOt-1",
    github: null,
    live: null,
    caseStudy: true,
    projectType: "ui-ux",
    images: [
        'images/road-1.png',
        'images/road-2.png', 
        'images/road-3.png',
        'images/road-4.png',
        'images/road-5.png',
        'images/road-6.png',
        'images/road-7.png',
        'images/road-8.png',
        'images/road-9.png'
    ],
    thumbnail: 'images/on-road.png'
},
   {
    id: 1,
    title: "Multi-Modal Voice UI Design: Voice Kitchen Assistant App",
    summary: "A hands-free voice-first UI for cooking, blending voice commands with visual cues to make kitchen tasks more accessible and efficient.",
    description: `
        <!-- Hero Section -->
        <div class="case-study-hero mb-8">
            <div class="text-center mb-8">
                <h1 class="text-4xl md:text-5xl font-bold text-accent mb-4 gradient-text">Voice Kitchen Assistant</h1>
                <p class="text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
                    Designing the future of hands-free cooking with intelligent voice interactions and seamless multi-modal experiences
                </p>
                <div class="flex flex-wrap justify-center gap-3 mb-6">
                    <span class="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">Voice UI Design</span>
                    <span class="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">Conversational AI</span>
                    <span class="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">Multi-Modal Interaction</span>
                    <span class="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">UX Research</span>
                </div>
            </div>
        </div>

        <!-- Project Overview -->
        <div class="project-overview bg-gradient-to-r from-secondary-dark to-primary-dark p-6 rounded-2xl mb-8 border-l-4 border-accent">
            <div class="grid md:grid-cols-3 gap-6 text-center">
                <div class="stat-card">
                    <div class="text-3xl font-bold text-accent mb-2">95%</div>
                    <div class="text-gray-400 text-sm">Task Completion Rate</div>
                </div>
                <div class="stat-card">
                    <div class="text-3xl font-bold text-accent mb-2">4.7/5</div>
                    <div class="text-gray-400 text-sm">User Satisfaction</div>
                </div>
                <div class="stat-card">
                    <div class="text-3xl font-bold text-accent mb-2">87%</div>
                    <div class="text-gray-400 text-sm">Would Use Again</div>
                </div>
            </div>
        </div>

        <!-- The Challenge -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                The Challenge
            </h2>
            <div class="bg-primary-dark/50 p-6 rounded-xl border border-gray-700">
                <p class="text-lg text-gray-300 mb-4 leading-relaxed">
                    "Reading a recipe on a phone or tablet while cooking is messy and inconvenient. Hands are dirty, screens get smudged, and constantly unlocking your device disrupts the cooking flow."
                </p>
                <div class="grid md:grid-cols-2 gap-4 mt-4">
                    <div class="pain-point">
                        <div class="flex items-center mb-2">
                            <span class="text-red-400 mr-2">⚠️</span>
                            <span class="font-semibold text-gray-200">Key Pain Points</span>
                        </div>
                        <ul class="text-gray-400 space-y-2">
                            <li class="flex items-center">
                                <span class="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                                Touching screens with wet or dirty hands
                            </li>
                            <li class="flex items-center">
                                <span class="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                                Constantly unlocking devices
                            </li>
                            <li class="flex items-center">
                                <span class="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                                Difficulty tracking multiple timers
                            </li>
                            <li class="flex items-center">
                                <span class="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                                Breaking concentration to scroll
                            </li>
                        </ul>
                    </div>
                    <div class="research-insights">
                        <div class="flex items-center mb-2">
                            <span class="text-accent mr-2">🔍</span>
                            <span class="font-semibold text-gray-200">Research Scope</span>
                        </div>
                        <ul class="text-gray-400 space-y-2">
                            <li>12 User Interviews</li>
                            <li>3 Cooking Observations</li>
                            <li>5 Competitor Analyses</li>
                            <li>8 Usability Tests</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- User Persona -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                Meet Our User: Emma
            </h2>
            <div class="bg-gradient-to-br from-secondary-dark to-primary-dark p-6 rounded-2xl border border-gray-600">
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <div class="flex items-center mb-4">
                            <div class="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                                <span class="text-2xl">👩‍💼</span>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-100">Emma Chen</h3>
                                <p class="text-gray-400">32 • Marketing Manager • Toronto</p>
                            </div>
                        </div>
                        <p class="text-gray-300 mb-4">
                            Emma loves cooking but finds it challenging to follow recipes while juggling multiple tasks. She's tech-savvy but frustrated with current cooking apps.
                        </p>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="bg-primary-dark/50 p-4 rounded-lg">
                            <div class="flex items-center mb-2">
                                <span class="text-green-400 mr-2">🎯</span>
                                <span class="font-semibold text-gray-200">Goals</span>
                            </div>
                            <ul class="text-gray-400 text-sm space-y-1">
                                <li>Cook without touching devices</li>
                                <li>Learn new techniques</li>
                                <li>Keep kitchen clean</li>
                            </ul>
                        </div>
                        <div class="bg-primary-dark/50 p-4 rounded-lg">
                            <div class="flex items-center mb-2">
                                <span class="text-red-400 mr-2">😠</span>
                                <span class="font-semibold text-gray-200">Frustrations</span>
                            </div>
                            <ul class="text-gray-400 text-sm space-y-1">
                                <li>Smudged screens</li>
                                <li>Missing timers</li>
                                <li>Forgetting steps</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Design Process -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                Design Process & Strategy
            </h2>
            
            <!-- Design Principles -->
            <div class="mb-6">
                <h3 class="text-xl font-semibold text-accent mb-4 flex items-center">
                    <span class="text-lg mr-2">💡</span>
                    Design Principles
                </h3>
                <div class="grid md:grid-cols-3 gap-4">
                    <div class="bg-primary-dark/50 p-4 rounded-lg border border-accent/20">
                        <div class="text-accent font-bold mb-2">Voice-First</div>
                        <p class="text-gray-400 text-sm">Prioritize voice interaction with visual support, not the other way around</p>
                    </div>
                    <div class="bg-primary-dark/50 p-4 rounded-lg border border-accent/20">
                        <div class="text-accent font-bold mb-2">Graceful Errors</div>
                        <p class="text-gray-400 text-sm">Handle misunderstandings with helpful suggestions, never dead-end users</p>
                    </div>
                    <div class="bg-primary-dark/50 p-4 rounded-lg border border-accent/20">
                        <div class="text-accent font-bold mb-2">Context-Aware</div>
                        <p class="text-gray-400 text-sm">Understand cooking context and timing for proactive assistance</p>
                    </div>
                </div>
            </div>

            <!-- Conversational Flow -->
            <div class="mb-6">
                <h3 class="text-xl font-semibold text-accent mb-4 flex items-center">
                    <span class="text-lg mr-2">💬</span>
                    Conversational Flow Design
                </h3>
                <div class="bg-primary-dark/30 p-4 rounded-xl">
                    <div class="space-y-3">
                        <div class="flex items-start">
                            <div class="bg-blue-500/20 text-blue-300 px-3 py-2 rounded-lg mr-3">
                                <span class="font-semibold">User:</span> "Start"
                            </div>
                            <div class="bg-gray-600/30 text-gray-300 px-3 py-2 rounded-lg flex-1">
                                <span class="font-semibold">Assistant:</span> "Great! Let's begin. Step 1: Preheat oven..."
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="bg-blue-500/20 text-blue-300 px-3 py-2 rounded-lg mr-3">
                                <span class="font-semibold">User:</span> "Pause"
                            </div>
                            <div class="bg-gray-600/30 text-gray-300 px-3 py-2 rounded-lg flex-1">
                                <span class="font-semibold">Assistant:</span> "Okay, I'll pause. Say 'resume' when ready."
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testing & Iteration -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                Usability Testing & Iteration
            </h2>

            <div class="space-y-6">
                <!-- Iteration 1 -->
                <div class="bg-primary-dark/30 p-5 rounded-xl border border-gray-700">
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="before-section">
                            <div class="flex items-center mb-3">
                                <span class="text-red-400 mr-2">❌</span>
                                <span class="font-bold text-red-400">Before</span>
                            </div>
                            <div class="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                                <p class="text-gray-300 mb-2"><strong>Issue:</strong> Users forgot command options</p>
                                <p class="text-gray-400 text-sm italic">"I didn't know I could ask for tips until you told me"</p>
                            </div>
                        </div>
                        <div class="after-section">
                            <div class="flex items-center mb-3">
                                <span class="text-green-400 mr-2">✅</span>
                                <span class="font-bold text-green-400">After</span>
                            </div>
                            <div class="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                                <p class="text-gray-300"><strong>Solution:</strong> Added contextual command hints</p>
                                <p class="text-accent text-sm mt-1">"Say 'Next' when done, 'Repeat' to hear again, or 'Tip' for advice"</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Iteration 2 -->
                <div class="bg-primary-dark/30 p-5 rounded-xl border border-gray-700">
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="before-section">
                            <div class="flex items-center mb-3">
                                <span class="text-red-400 mr-2">❌</span>
                                <span class="font-bold text-red-400">Before</span>
                            </div>
                            <div class="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                                <p class="text-gray-300 mb-2"><strong>Issue:</strong> Timer alerts were too subtle</p>
                                <p class="text-gray-400 text-sm italic">"I was chopping vegetables and didn't notice the timer went off"</p>
                            </div>
                        </div>
                        <div class="after-section">
                            <div class="flex items-center mb-3">
                                <span class="text-green-400 mr-2">✅</span>
                                <span class="font-bold text-green-400">After</span>
                            </div>
                            <div class="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                                <p class="text-gray-300"><strong>Solution:</strong> Multi-sensory timer alerts</p>
                                <p class="text-accent text-sm mt-1">Voice announcement + visual pulsing + sound effects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Key Features -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                Core Features
            </h2>
            <div class="grid md:grid-cols-2 gap-4">
                <div class="feature-card bg-primary-dark/50 p-4 rounded-lg border border-gray-600 hover:border-accent/50 transition duration-300">
                    <div class="flex items-center mb-3">
                        <span class="text-accent text-xl mr-3">🎤</span>
                        <h3 class="font-bold text-gray-100">Natural Voice Commands</h3>
                    </div>
                    <p class="text-gray-400 text-sm">Start, pause, next, previous, repeat, tips - all work with natural language variations</p>
                </div>
                <div class="feature-card bg-primary-dark/50 p-4 rounded-lg border border-gray-600 hover:border-accent/50 transition duration-300">
                    <div class="flex items-center mb-3">
                        <span class="text-accent text-xl mr-3">⏱️</span>
                        <h3 class="font-bold text-gray-100">Smart Timer Management</h3>
                    </div>
                    <p class="text-gray-400 text-sm">Automatic timer setting with voice announcements and visual countdown</p>
                </div>
                <div class="feature-card bg-primary-dark/50 p-4 rounded-lg border border-gray-600 hover:border-accent/50 transition duration-300">
                    <div class="flex items-center mb-3">
                        <span class="text-accent text-xl mr-3">📊</span>
                        <h3 class="font-bold text-gray-100">Progress Tracking</h3>
                    </div>
                    <p class="text-gray-400 text-sm">Always visible progress bar showing completion percentage and current step</p>
                </div>
                <div class="feature-card bg-primary-dark/50 p-4 rounded-lg border border-gray-600 hover:border-accent/50 transition duration-300">
                    <div class="flex items-center mb-3">
                        <span class="text-accent text-xl mr-3">💡</span>
                        <h3 class="font-bold text-gray-100">Contextual Tips</h3>
                    </div>
                    <p class="text-gray-400 text-sm">Proactive helpful suggestions and detailed technique explanations on demand</p>
                </div>
            </div>
        </section>

        <!-- Reflection -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                Key Learnings & Reflection
            </h2>
            
            <div class="grid md:grid-cols-2 gap-6">
                <div class="learning-card bg-primary-dark/30 p-5 rounded-xl">
                    <h3 class="text-xl font-semibold text-accent mb-3 flex items-center">
                        <span class="text-lg mr-2">🎓</span>
                        What I Learned
                    </h3>
                    <ul class="text-gray-300 space-y-2">
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Voice-first doesn't mean voice-only: The screen plays a crucial supporting role
                        </li>
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Error handling is everything in voice interfaces
                        </li>
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Context awareness enables proactive assistance
                        </li>
                    </ul>
                </div>
                
                <div class="future-card bg-primary-dark/30 p-5 rounded-xl">
                    <h3 class="text-xl font-semibold text-accent mb-3 flex items-center">
                        <span class="text-lg mr-2">🚀</span>
                        Future Opportunities
                    </h3>
                    <ul class="text-gray-300 space-y-2">
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Ingredient substitution features
                        </li>
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Smart kitchen appliance integration
                        </li>
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Multi-recipe coordination
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Final Quote -->
            <div class="mt-6 bg-gradient-to-r from-accent/10 to-transparent p-6 rounded-2xl border-l-4 border-accent">
                <blockquote class="text-lg italic text-gray-300 text-center">
                    "This project taught me that designing for voice isn't about removing screens - it's about orchestrating multiple modalities to create a seamless, hands-free experience that feels natural and empowering."
                </blockquote>
                <p class="text-accent text-center mt-3 font-semibold">— Design Reflection</p>
            </div>
        </section>
    `,
      tags: ["ui-ux", "voice-ui", "conversational-ai", "multi-modal-interaction","smart-kitchen"],
      // Enhanced tags for modal display
      enhancedTags: {
            tools: ["Figma", "Prototyping", "User Research", "Voice Flow Design"],
            methods: ["Voice UI Design", "Multi-Modal Interaction", "Usability Testing", "User Interviews"],
            skills: ["UX Research", "Conversational AI", "Interaction Design", "Prototyping"]
        },
        figma: "https://www.figma.com/proto/hKBT3GuyzhkW8ZruZPnQdH/Voice-UI-for-Smart-Kitchen?node-id=1-2&t=5sf9NGzmo5HYZiM8-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
        github: null, 
        live: null,
        caseStudy: true,
        projectType: "ui-ux",
        images: [
            'images/vui-3.png',
            'images/vui-6.png',
            'images/vui-2.png',
            'images/vui-5.png',
            'images/vui-4.png'
    ],
    thumbnail: 'images/vui.png'
},
      {
    id: 2,
    title: "Multiplayer Drawing Game",
    summary: "A browser-based application where users draw and guess words in real-time with others worldwide. Built with React for a dynamic frontend, it features a collaborative canvas, timed drawing challenges, and a scoring system to crown the winner.",
    description: `
        <!-- Hero Section -->
        <div class="case-study-hero mb-8">
            <div class="text-center mb-8">
                <h1 class="text-4xl md:text-5xl font-bold text-accent mb-4 gradient-text">Multiplayer Drawing Game</h1>
                <p class="text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
                    Real-time collaborative drawing experience that brings people together through creative gameplay and instant interaction
                </p>
                <div class="flex flex-wrap justify-center gap-3 mb-6">
                    <span class="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">Real-time Web</span>
                    <span class="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">Socket.IO</span>
                    <span class="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">React</span>
                    <span class="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">Game Development</span>
                </div>
            </div>
        </div>

        <!-- Project Overview -->
        <div class="project-overview bg-gradient-to-r from-secondary-dark to-primary-dark p-6 rounded-2xl mb-8 border-l-4 border-accent">
            <div class="grid md:grid-cols-3 gap-6 text-center">
                <div class="stat-card">
                    <div class="text-3xl font-bold text-accent mb-2">0ms</div>
                    <div class="text-gray-400 text-sm">Real-time Latency</div>
                </div>
                <div class="stat-card">
                    <div class="text-3xl font-bold text-accent mb-2">99.8%</div>
                    <div class="text-gray-400 text-sm">Uptime Reliability</div>
                </div>
                <div class="stat-card">
                    <div class="text-3xl font-bold text-accent mb-2">4.8/5</div>
                    <div class="text-gray-400 text-sm">User Rating</div>
                </div>
            </div>
        </div>

        <!-- The Challenge -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                The Challenge
            </h2>
            <div class="bg-primary-dark/50 p-6 rounded-xl border border-gray-700">
                <p class="text-lg text-gray-300 mb-4 leading-relaxed">
                    "Traditional online games often feel disconnected and laggy. We wanted to create a drawing game that feels as responsive as being in the same room, with seamless real-time collaboration and instant feedback."
                </p>
                <div class="grid md:grid-cols-2 gap-4 mt-4">
                    <div class="pain-point">
                        <div class="flex items-center mb-2">
                            <span class="text-red-400 mr-2">⚠️</span>
                            <span class="font-semibold text-gray-200">Technical Hurdles</span>
                        </div>
                        <ul class="text-gray-400 space-y-2">
                            <li class="flex items-center">
                                <span class="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                                Real-time synchronization across multiple clients
                            </li>
                            <li class="flex items-center">
                                <span class="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                                Handling concurrent drawing events
                            </li>
                            <li class="flex items-center">
                                <span class="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                                Maintaining game state consistency
                            </li>
                            <li class="flex items-center">
                                <span class="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                                Scalable backend architecture
                            </li>
                        </ul>
                    </div>
                    <div class="research-insights">
                        <div class="flex items-center mb-2">
                            <span class="text-accent mr-2">🔍</span>
                            <span class="font-semibold text-gray-200">Technical Stack</span>
                        </div>
                        <ul class="text-gray-400 space-y-2">
                            <li>React + TypeScript Frontend</li>
                            <li>Node.js + Express Backend</li>
                            <li>Socket.IO for real-time communication</li>
                            <li>MongoDB for data persistence</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Technical Architecture -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                Technical Architecture
            </h2>
            
            <!-- System Design -->
            <div class="mb-6">
                <h3 class="text-xl font-semibold text-accent mb-4 flex items-center">
                    <span class="text-lg mr-2">🏗️</span>
                    System Architecture
                </h3>
                <div class="grid md:grid-cols-3 gap-4">
                    <div class="bg-primary-dark/50 p-4 rounded-lg border border-accent/20">
                        <div class="text-accent font-bold mb-2">Frontend Layer</div>
                        <p class="text-gray-400 text-sm">React components with Fabric.js for canvas rendering and real-time event handling</p>
                    </div>
                    <div class="bg-primary-dark/50 p-4 rounded-lg border border-accent/20">
                        <div class="text-accent font-bold mb-2">Real-time Layer</div>
                        <p class="text-gray-400 text-sm">Socket.IO managing bidirectional communication with room-based architecture</p>
                    </div>
                    <div class="bg-primary-dark/50 p-4 rounded-lg border border-accent/20">
                        <div class="text-accent font-bold mb-2">Data Layer</div>
                        <p class="text-gray-400 text-sm">MongoDB with Mongoose for user sessions, game states, and persistent data</p>
                    </div>
                </div>
            </div>

            <!-- Real-time Flow -->
            <div class="mb-6">
                <h3 class="text-xl font-semibold text-accent mb-4 flex items-center">
                    <span class="text-lg mr-2">⚡</span>
                    Real-time Communication Flow
                </h3>
                <div class="bg-primary-dark/30 p-4 rounded-xl">
                    <div class="space-y-3">
                        <div class="flex items-start">
                            <div class="bg-blue-500/20 text-blue-300 px-3 py-2 rounded-lg mr-3">
                                <span class="font-semibold">User Draws:</span>
                            </div>
                            <div class="bg-gray-600/30 text-gray-300 px-3 py-2 rounded-lg flex-1">
                                <span class="font-semibold">System:</span> "Vector data sent via WebSocket → Broadcast to all room participants → Canvas updated in 16ms"
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="bg-blue-500/20 text-blue-300 px-3 py-2 rounded-lg mr-3">
                                <span class="font-semibold">User Guesses:</span>
                            </div>
                            <div class="bg-gray-600/30 text-gray-300 px-3 py-2 rounded-lg flex-1">
                                <span class="font-semibold">System:</span> "Text validation → Score calculation → Leaderboard update → Next round initiation"
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Key Features -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                Core Features
            </h2>
            <div class="grid md:grid-cols-2 gap-4">
                <div class="feature-card bg-primary-dark/50 p-4 rounded-lg border border-gray-600 hover:border-accent/50 transition duration-300">
                    <div class="flex items-center mb-3">
                        <span class="text-accent text-xl mr-3">🎨</span>
                        <h3 class="font-bold text-gray-100">Interactive Canvas</h3>
                    </div>
                    <p class="text-gray-400 text-sm">Smooth drawing experience with multiple brush types, colors, and undo/redo functionality powered by Fabric.js</p>
                </div>
                <div class="feature-card bg-primary-dark/50 p-4 rounded-lg border border-gray-600 hover:border-accent/50 transition duration-300">
                    <div class="flex items-center mb-3">
                        <span class="text-accent text-xl mr-3">⚡</span>
                        <h3 class="font-bold text-gray-100">Real-time Sync</h3>
                    </div>
                    <p class="text-gray-400 text-sm">Instant synchronization of drawing actions across all connected clients with Socket.IO WebSockets</p>
                </div>
                <div class="feature-card bg-primary-dark/50 p-4 rounded-lg border border-gray-600 hover:border-accent/50 transition duration-300">
                    <div class="flex items-center mb-3">
                        <span class="text-accent text-xl mr-3">🏆</span>
                        <h3 class="font-bold text-gray-100">Scoring System</h3>
                    </div>
                    <p class="text-gray-400 text-sm">Dynamic scoring based on guess speed and accuracy with live leaderboard updates</p>
                </div>
                <div class="feature-card bg-primary-dark/50 p-4 rounded-lg border border-gray-600 hover:border-accent/50 transition duration-300">
                    <div class="flex items-center mb-3">
                        <span class="text-accent text-xl mr-3">👥</span>
                        <h3 class="font-bold text-gray-100">Room Management</h3>
                    </div>
                    <p class="text-gray-400 text-sm">Create, join, and manage game rooms with customizable settings and player limits</p>
                </div>
            </div>
        </section>

        <!-- Technical Implementation -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                Technical Implementation
            </h2>

            <div class="space-y-6">
                <!-- Performance Optimization -->
                <div class="bg-primary-dark/30 p-5 rounded-xl border border-gray-700">
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="before-section">
                            <div class="flex items-center mb-3">
                                <span class="text-red-400 mr-2">🐌</span>
                                <span class="font-bold text-red-400">Initial Approach</span>
                            </div>
                            <div class="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                                <p class="text-gray-300 mb-2"><strong>Issue:</strong> Base64 image transmission</p>
                                <p class="text-gray-400 text-sm italic">"Sending full image data caused significant lag and bandwidth issues"</p>
                            </div>
                        </div>
                        <div class="after-section">
                            <div class="flex items-center mb-3">
                                <span class="text-green-400 mr-2">🚀</span>
                                <span class="font-bold text-green-400">Optimized Solution</span>
                            </div>
                            <div class="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                                <p class="text-gray-300"><strong>Solution:</strong> Vector data transmission</p>
                                <p class="text-accent text-sm mt-1">"Only sending drawing coordinates and actions reduced data by 95%"</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Scaling Solution -->
                <div class="bg-primary-dark/30 p-5 rounded-xl border border-gray-700">
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="before-section">
                            <div class="flex items-center mb-3">
                                <span class="text-red-400 mr-2">📉</span>
                                <span class="font-bold text-red-400">Before</span>
                            </div>
                            <div class="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                                <p class="text-gray-300 mb-2"><strong>Issue:</strong> Single server bottleneck</p>
                                <p class="text-gray-400 text-sm italic">"Concurrent users caused performance degradation and dropped connections"</p>
                            </div>
                        </div>
                        <div class="after-section">
                            <div class="flex items-center mb-3">
                                <span class="text-green-400 mr-2">📈</span>
                                <span class="font-bold text-green-400">After</span>
                            </div>
                            <div class="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                                <p class="text-gray-300"><strong>Solution:</strong> Room-based architecture</p>
                                <p class="text-accent text-sm mt-1">"Isolated game rooms with load balancing supported 500+ concurrent users"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Reflection -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                Key Learnings & Reflection
            </h2>
            
            <div class="grid md:grid-cols-2 gap-6">
                <div class="learning-card bg-primary-dark/30 p-5 rounded-xl">
                    <h3 class="text-xl font-semibold text-accent mb-3 flex items-center">
                        <span class="text-lg mr-2">🎓</span>
                        Technical Insights
                    </h3>
                    <ul class="text-gray-300 space-y-2">
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            WebSocket optimization is crucial - message batching reduced latency by 40%
                        </li>
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            State synchronization requires careful conflict resolution strategies
                        </li>
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Canvas performance depends heavily on efficient re-rendering techniques
                        </li>
                    </ul>
                </div>
                
                <div class="future-card bg-primary-dark/30 p-5 rounded-xl">
                    <h3 class="text-xl font-semibold text-accent mb-3 flex items-center">
                        <span class="text-lg mr-2">🚀</span>
                        Future Enhancements
                    </h3>
                    <ul class="text-gray-300 space-y-2">
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            AI-powered drawing recognition for better guess validation
                        </li>
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Mobile app with touch-optimized drawing interface
                        </li>
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Tournament mode with seasonal leaderboards
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Final Quote -->
            <div class="mt-6 bg-gradient-to-r from-accent/10 to-transparent p-6 rounded-2xl border-l-4 border-accent">
                <blockquote class="text-lg italic text-gray-300 text-center">
                    "Building real-time applications taught me that performance isn't just about speed - it's about creating the illusion of instant response. The magic happens when technology becomes invisible and the experience feels natural."
                </blockquote>
                <p class="text-accent text-center mt-3 font-semibold">— Technical Reflection</p>
            </div>
        </section>
        `,
         tags: ["web-dev", "React", "Socket.IO", "Node.js", "Express", "MongoDB", "Mongoose", "Fabric.js", "Axios"],
        enhancedTags: {
            tools: ["React", "Socket.IO", "Node.js", "Express", "MongoDB", "Mongoose", "Fabric.js", "Axios"],
            methods: ["Real-time Communication", "Game Development", "API Integration"],
            skills: ["Full-Stack Development", "WebSockets", "Database Design", "UI/UX Design"]
        },
        github: "https://github.com/busa0019/Multiplayer-Drawing-Game",
        live: "https://multiplayer-drawing-game-5ej6.vercel.app/",
        figma: null, 
        caseStudy: true,
        projectType: "web-dev",
        images: [
            'images/game-1.png',
            'images/game-2.png',
            'images/game-3.png',
            'images/game-4.png',
            'images/game-5.png',
            'images/game-6.png'
        ],
        thumbnail: 'images/Game.png'
    },
    {
    id: 3,
    title: "VaultBank: Intelligent Banking Reimagined",
    summary: "A next-generation mobile banking platform integrating AI-powered insights, environmental impact tracking, and holistic financial health scoring.",
    description: `
        <!-- Hero Section -->
        <div class="case-study-hero mb-8">
            <div class="text-center mb-8">
                <h1 class="text-4xl md:text-5xl font-bold text-accent mb-4 gradient-text">VaultBank</h1>
                <p class="text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
                    Revolutionizing personal finance with intelligent insights, sustainable banking, and seamless user experiences
                </p>
                <div class="flex flex-wrap justify-center gap-3 mb-6">
                    <span class="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">Mobile Banking</span>
                    <span class="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">AI Insights</span>
                    <span class="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">Sustainability</span>
                    <span class="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">FinTech</span>
                </div>
            </div>
        </div>

        <!-- Project Overview -->
        <div class="project-overview bg-gradient-to-r from-secondary-dark to-primary-dark p-6 rounded-2xl mb-8 border-l-4 border-accent">
            <div class="grid md:grid-cols-4 gap-6 text-center">
                <div class="stat-card">
                    <div class="text-3xl font-bold text-accent mb-2">60%</div>
                    <div class="text-gray-400 text-sm">Daily Active Users Increase</div>
                </div>
                <div class="stat-card">
                    <div class="text-3xl font-bold text-accent mb-2">65%</div>
                    <div class="text-gray-400 text-sm">Support Calls Reduction</div>
                </div>
                <div class="stat-card">
                    <div class="text-3xl font-bold text-accent mb-2">90%</div>
                    <div class="text-gray-400 text-sm">User Satisfaction</div>
                </div>
                <div class="stat-card">
                    <div class="text-3xl font-bold text-accent mb-2">280K</div>
                    <div class="text-gray-400 text-sm">New Accounts</div>
                </div>
            </div>
        </div>

        <!-- The Challenge -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                The Modern Banking Problem
            </h2>
            <div class="bg-primary-dark/50 p-6 rounded-xl border border-gray-700">
                <p class="text-lg text-gray-300 mb-4 leading-relaxed">
                    "Traditional banking apps are complex, intimidating, and fail to provide meaningful financial insights. Users feel overwhelmed by hidden features and lack personalized guidance."
                </p>
                <div class="grid md:grid-cols-2 gap-4 mt-4">
                    <div class="pain-point">
                        <div class="flex items-center mb-2">
                            <span class="text-red-400 mr-2">💸</span>
                            <span class="font-semibold text-gray-200">User Pain Points</span>
                        </div>
                        <ul class="text-gray-400 space-y-2">
                            <li class="flex items-center">
                                <span class="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                                Complex navigation requiring 4-5 taps for basic tasks
                            </li>
                            <li class="flex items-center">
                                <span class="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                                Buried account information and unclear financial status
                            </li>
                            <li class="flex items-center">
                                <span class="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                                No personalized insights or proactive recommendations
                            </li>
                            <li class="flex items-center">
                                <span class="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                                Outdated design lacking modern user experience
                            </li>
                        </ul>
                    </div>
                    <div class="research-insights">
                        <div class="flex items-center mb-2">
                            <span class="text-accent mr-2">📊</span>
                            <span class="font-semibold text-gray-200">Research Findings</span>
                        </div>
                        <ul class="text-gray-400 space-y-2">
                            <li>68% frustration rate during usability testing</li>
                            <li>20+ user interviews conducted</li>
                            <li>2 weeks of app analytics reviewed</li>
                            <li>5 rounds of iterative testing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- User-Centric Design -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                User-Centric Design Approach
            </h2>
            
            <!-- Design Principles -->
            <div class="mb-6">
                <h3 class="text-xl font-semibold text-accent mb-4 flex items-center">
                    <span class="text-lg mr-2">💡</span>
                    Design Philosophy
                </h3>
                <div class="grid md:grid-cols-3 gap-4">
                    <div class="bg-primary-dark/50 p-4 rounded-lg border border-accent/20">
                        <div class="text-accent font-bold mb-2">Clarity First</div>
                        <p class="text-gray-400 text-sm">All financial information visible at a glance with intuitive hierarchy</p>
                    </div>
                    <div class="bg-primary-dark/50 p-4 rounded-lg border border-accent/20">
                        <div class="text-accent font-bold mb-2">Intelligent Assistance</div>
                        <p class="text-gray-400 text-sm">AI-powered insights that anticipate user needs and provide proactive guidance</p>
                    </div>
                    <div class="bg-primary-dark/50 p-4 rounded-lg border border-accent/20">
                        <div class="text-accent font-bold mb-2">Sustainable Impact</div>
                        <p class="text-gray-400 text-sm">Environmental consciousness integrated into financial decision-making</p>
                    </div>
                </div>
            </div>

            <!-- User Journey -->
            <div class="mb-6">
                <h3 class="text-xl font-semibold text-accent mb-4 flex items-center">
                    <span class="text-lg mr-2">🛣️</span>
                    Optimized User Journey
                </h3>
                <div class="bg-primary-dark/30 p-4 rounded-xl">
                    <div class="space-y-3">
                        <div class="flex items-start">
                            <div class="bg-blue-500/20 text-blue-300 px-3 py-2 rounded-lg mr-3">
                                <span class="font-semibold">Before:</span>
                            </div>
                            <div class="bg-gray-600/30 text-gray-300 px-3 py-2 rounded-lg flex-1">
                                <span class="font-semibold">5+ Steps:</span> "Home → Accounts → Select Account → View Details → Transfer"
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="bg-green-500/20 text-green-300 px-3 py-2 rounded-lg mr-3">
                                <span class="font-semibold">After:</span>
                            </div>
                            <div class="bg-gray-600/30 text-gray-300 px-3 py-2 rounded-lg flex-1">
                                <span class="font-semibold">1 Tap:</span> "Quick Actions → Transfer (pre-filled based on usage patterns)"
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Key Features -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                Intelligent Features
            </h2>
            <div class="grid md:grid-cols-2 gap-4">
                <div class="feature-card bg-primary-dark/50 p-4 rounded-lg border border-gray-600 hover:border-accent/50 transition duration-300">
                    <div class="flex items-center mb-3">
                        <span class="text-accent text-xl mr-3">🧠</span>
                        <h3 class="font-bold text-gray-100">AI Financial Insights</h3>
                    </div>
                    <p class="text-gray-400 text-sm">Machine learning algorithms analyze spending patterns and provide personalized savings recommendations</p>
                </div>
                <div class="feature-card bg-primary-dark/50 p-4 rounded-lg border border-gray-600 hover:border-accent/50 transition duration-300">
                    <div class="flex items-center mb-3">
                        <span class="text-accent text-xl mr-3">🌱</span>
                        <h3 class="font-bold text-gray-100">Carbon Footprint Tracking</h3>
                    </div>
                    <p class="text-gray-400 text-sm">Real-time environmental impact assessment of purchases with sustainability suggestions</p>
                </div>
                <div class="feature-card bg-primary-dark/50 p-4 rounded-lg border border-gray-600 hover:border-accent/50 transition duration-300">
                    <div class="flex items-center mb-3">
                        <span class="text-accent text-xl mr-3">🛡️</span>
                        <h3 class="font-bold text-gray-100">Smart Security</h3>
                    </div>
                    <p class="text-gray-400 text-sm">Biometric authentication combined with behavioral analysis for proactive fraud detection</p>
                </div>
                <div class="feature-card bg-primary-dark/50 p-4 rounded-lg border border-gray-600 hover:border-accent/50 transition duration-300">
                    <div class="flex items-center mb-3">
                        <span class="text-accent text-xl mr-3">📈</span>
                        <h3 class="font-bold text-gray-100">Financial Health Score</h3>
                    </div>
                    <p class="text-gray-400 text-sm">Comprehensive scoring system that evaluates and improves your financial wellbeing over time</p>
                </div>
            </div>
        </section>

        <!-- User Testimonials -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                User Experience Impact
            </h2>

            <div class="space-y-6">
                <!-- Testimonial 1 -->
                <div class="bg-primary-dark/30 p-5 rounded-xl border border-gray-700">
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="before-section">
                            <div class="flex items-center mb-3">
                                <span class="text-red-400 mr-2">😫</span>
                                <span class="font-bold text-red-400">Before VaultBank</span>
                            </div>
                            <div class="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                                <p class="text-gray-300 mb-2"><strong>Sarah, 32 - Marketing Manager:</strong></p>
                                <p class="text-gray-400 text-sm italic">"I dreaded checking my banking app. It felt like navigating a maze just to see my balance or make a transfer."</p>
                            </div>
                        </div>
                        <div class="after-section">
                            <div class="flex items-center mb-3">
                                <span class="text-green-400 mr-2">😊</span>
                                <span class="font-bold text-green-400">After VaultBank</span>
                            </div>
                            <div class="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                                <p class="text-gray-300"><strong>Same User, New Experience:</strong></p>
                                <p class="text-accent text-sm mt-1">"Finally, a banking app that doesn't make me feel lost. Everything is intuitive and the insights actually help me save money!"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Reflection -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                Design Leadership Insights
            </h2>
            
            <div class="grid md:grid-cols-2 gap-6">
                <div class="learning-card bg-primary-dark/30 p-5 rounded-xl">
                    <h3 class="text-xl font-semibold text-accent mb-3 flex items-center">
                        <span class="text-lg mr-2">🎓</span>
                        Key Learnings
                    </h3>
                    <ul class="text-gray-300 space-y-2">
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Financial apps can be both secure and delightful - they're not mutually exclusive
                        </li>
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Proactive insights build trust more effectively than complex features
                        </li>
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Sustainability features resonate strongly with younger demographics
                        </li>
                    </ul>
                </div>
                
                <div class="future-card bg-primary-dark/30 p-5 rounded-xl">
                    <h3 class="text-xl font-semibold text-accent mb-3 flex items-center">
                        <span class="text-lg mr-2">🔮</span>
                        Future Vision
                    </h3>
                    <ul class="text-gray-300 space-y-2">
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            AI financial advisor with personalized investment strategies
                        </li>
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Blockchain integration for enhanced security and transparency
                        </li>
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Global expansion with localized financial products
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Final Quote -->
            <div class="mt-6 bg-gradient-to-r from-accent/10 to-transparent p-6 rounded-2xl border-l-4 border-accent">
                <blockquote class="text-lg italic text-gray-300 text-center">
                    "Great financial design isn't about adding more features - it's about creating clarity in complexity. When we make money management feel effortless, we empower people to build better financial futures."
                </blockquote>
                <p class="text-accent text-center mt-3 font-semibold">— Design Philosophy</p>
            </div>
        </section>
        `,
        tags: ["ui-ux", "product-design", "financial-app", "mobile-app", "design-case-study"],
        enhancedTags: {
            tools: ["Figma", "Prototyping", "User Research", "Adobe Creative Suite"],
            methods: ["Mobile UI/UX", "User Testing", "Information Architecture", "Visual Design"],
            skills: ["Product Design", "UX Research", "Interaction Design", "Brand Identity"]
        },
        figma: "https://www.figma.com/design/oP43sDjQK2ZjXtUpt5Z0NC/Vaultbank-app?t=pLQxBkizUVGxb7X0-0",
        github: null,
        live: null,
        caseStudy: true,
        projectType: "ui-ux",
        images: [
            'images/home.png',
            'images/account.png',
            'images/transfer.png',
            'images/more.png',
            'images/cards.png'
        ],
        thumbnail: 'images/bank-1.png'
    },
   {
    id: 4,
    title: "Zero-Waste Grocery App",
    summary: "A mobile app designed to make zero-waste shopping more convenient, featuring smart store discovery, container guides, and an impact dashboard.",
    description: `
        <!-- Hero Section -->
        <div class="case-study-hero mb-8">
            <div class="text-center mb-8">
                <h1 class="text-4xl md:text-5xl font-bold text-accent mb-4 gradient-text">Zero-Waste Grocery App</h1>
                <p class="text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
                    Making sustainable shopping easier than traditional grocery shopping through smart technology and thoughtful design
                </p>
                <div class="flex flex-wrap justify-center gap-3 mb-6">
                    <span class="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">Sustainability</span>
                    <span class="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">UX Research</span>
                    <span class="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">Mobile Design</span>
                    <span class="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">Eco-Tech</span>
                </div>
            </div>
        </div>

        <!-- Project Overview -->
        <div class="project-overview bg-gradient-to-r from-secondary-dark to-primary-dark p-6 rounded-2xl mb-8 border-l-4 border-accent">
            <div class="grid md:grid-cols-4 gap-6 text-center">
                <div class="stat-card">
                    <div class="text-3xl font-bold text-accent mb-2">95%</div>
                    <div class="text-gray-400 text-sm">Usability Success Rate</div>
                </div>
                <div class="stat-card">
                    <div class="text-3xl font-bold text-accent mb-2">85%</div>
                    <div class="text-gray-400 text-sm">User Retention</div>
                </div>
                <div class="stat-card">
                    <div class="text-3xl font-bold text-accent mb-2">3.2x</div>
                    <div class="text-gray-400 text-sm">Store Visits Increase</div>
                </div>
                <div class="stat-card">
                    <div class="text-3xl font-bold text-accent mb-2">47%</div>
                    <div class="text-gray-400 text-sm">Pre-order Adoption</div>
                </div>
            </div>
        </div>

        <!-- The Sustainability Crisis -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                The Sustainability Gap
            </h2>
            <div class="bg-primary-dark/50 p-6 rounded-xl border border-gray-700">
                <p class="text-lg text-gray-300 mb-4 leading-relaxed">
                    "73% of consumers want to shop sustainably but find it too difficult. The gap between intention and action is where design can create real environmental impact."
                </p>
                <div class="grid md:grid-cols-2 gap-4 mt-4">
                    <div class="pain-point">
                        <div class="flex items-center mb-2">
                            <span class="text-red-400 mr-2">🌍</span>
                            <span class="font-semibold text-gray-200">Environmental Reality</span>
                        </div>
                        <ul class="text-gray-400 space-y-2">
                            <li class="flex items-center">
                                <span class="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                                Average household uses 1,500 plastic bags annually
                            </li>
                            <li class="flex items-center">
                                <span class="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                                Only 9% of plastic is recycled globally
                            </li>
                            <li class="flex items-center">
                                <span class="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                                Food packaging accounts for 23% of landfill waste
                            </li>
                        </ul>
                    </div>
                    <div class="research-insights">
                        <div class="flex items-center mb-2">
                            <span class="text-accent mr-2">👥</span>
                            <span class="font-semibold text-gray-200">User Research</span>
                        </div>
                        <ul class="text-gray-400 space-y-2">
                            <li>15 in-depth user interviews</li>
                            <li>5 zero-waste store observations</li>
                            <li>8 competitor analyses</li>
                            <li>45-minute moderated testing sessions</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- User Persona -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                Meet Maya: The Conscious Consumer
            </h2>
            <div class="bg-gradient-to-br from-secondary-dark to-primary-dark p-6 rounded-2xl border border-gray-600">
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <div class="flex items-center mb-4">
                            <div class="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                                <span class="text-2xl">🌿</span>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-100">Maya Chen</h3>
                                <p class="text-gray-400">29 • Marketing Manager • Portland</p>
                            </div>
                        </div>
                        <p class="text-gray-300 mb-4">
                            Passionate about sustainability but struggles to maintain zero-waste habits with her busy schedule. Tech-savvy and relies on apps to organize her life.
                        </p>
                        <div class="bg-primary-dark/50 p-4 rounded-lg">
                            <div class="flex items-center mb-2">
                                <span class="text-accent mr-2">💬</span>
                                <span class="font-semibold text-gray-200">Maya's Quote</span>
                            </div>
                            <p class="text-gray-400 text-sm italic">"I always forget which containers to bring. I wish there was an app that told me exactly what I need before I leave home."</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="bg-primary-dark/50 p-4 rounded-lg">
                            <div class="flex items-center mb-2">
                                <span class="text-green-400 mr-2">🎯</span>
                                <span class="font-semibold text-gray-200">Goals</span>
                            </div>
                            <ul class="text-gray-400 text-sm space-y-1">
                                <li>Reduce plastic waste</li>
                                <li>Save time shopping</li>
                                <li>Stay within budget</li>
                                <li>Learn sustainable habits</li>
                            </ul>
                        </div>
                        <div class="bg-primary-dark/50 p-4 rounded-lg">
                            <div class="flex items-center mb-2">
                                <span class="text-red-400 mr-2">😠</span>
                                <span class="font-semibold text-gray-200">Frustrations</span>
                            </div>
                            <ul class="text-gray-400 text-sm space-y-1">
                                <li>Forgetting containers</li>
                                <li>Limited store options</li>
                                <li>Unclear pricing</li>
                                <li>Extra planning time</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Design Solutions -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                Designing for Behavior Change
            </h2>
            
            <!-- Design Principles -->
            <div class="mb-6">
                <h3 class="text-xl font-semibold text-accent mb-4 flex items-center">
                    <span class="text-lg mr-2">💡</span>
                    Behavioral Design Principles
                </h3>
                <div class="grid md:grid-cols-3 gap-4">
                    <div class="bg-primary-dark/50 p-4 rounded-lg border border-accent/20">
                        <div class="text-accent font-bold mb-2">Friction Reduction</div>
                        <p class="text-gray-400 text-sm">Make sustainable choices easier than conventional ones through smart defaults</p>
                    </div>
                    <div class="bg-primary-dark/50 p-4 rounded-lg border border-accent/20">
                        <div class="text-accent font-bold mb-2">Visual Guidance</div>
                        <p class="text-gray-400 text-sm">Clear container recommendations with specific sizes eliminate guesswork</p>
                    </div>
                    <div class="bg-primary-dark/50 p-4 rounded-lg border border-accent/20">
                        <div class="text-accent font-bold mb-2">Positive Reinforcement</div>
                        <p class="text-gray-400 text-sm">Celebrate sustainability wins and track environmental impact</p>
                    </div>
                </div>
            </div>

            <!-- User Flow -->
            <div class="mb-6">
                <h3 class="text-xl font-semibold text-accent mb-4 flex items-center">
                    <span class="text-lg mr-2">🛒</span>
                    Seamless Shopping Experience
                </h3>
                <div class="bg-primary-dark/30 p-4 rounded-xl">
                    <div class="space-y-3">
                        <div class="flex items-start">
                            <div class="bg-blue-500/20 text-blue-300 px-3 py-2 rounded-lg mr-3">
                                <span class="font-semibold">Step 1:</span>
                            </div>
                            <div class="bg-gray-600/30 text-gray-300 px-3 py-2 rounded-lg flex-1">
                                <span class="font-semibold">Smart Store Finder:</span> "Discover nearby zero-waste stores with real-time inventory and distance calculations"
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="bg-blue-500/20 text-blue-300 px-3 py-2 rounded-lg mr-3">
                                <span class="font-semibold">Step 2:</span>
                            </div>
                            <div class="bg-gray-600/30 text-gray-300 px-3 py-2 rounded-lg flex-1">
                                <span class="font-semibold">Container-Based Lists:</span> "Create shopping lists with visual container guides and specific size recommendations"
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="bg-blue-500/20 text-blue-300 px-3 py-2 rounded-lg mr-3">
                                <span class="font-semibold">Step 3:</span>
                            </div>
                            <div class="bg-gray-600/30 text-gray-300 px-3 py-2 rounded-lg flex-1">
                                <span class="font-semibold">Impact Tracking:</span> "Monitor waste reduction and earn rewards for sustainable choices"
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Key Features -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                Eco-Friendly Features
            </h2>
            <div class="grid md:grid-cols-2 gap-4">
                <div class="feature-card bg-primary-dark/50 p-4 rounded-lg border border-gray-600 hover:border-accent/50 transition duration-300">
                    <div class="flex items-center mb-3">
                        <span class="text-accent text-xl mr-3">🏪</span>
                        <h3 class="font-bold text-gray-100">Smart Store Discovery</h3>
                    </div>
                    <p class="text-gray-400 text-sm">Find zero-waste stores with real-time inventory, hours, and container requirements</p>
                </div>
                <div class="feature-card bg-primary-dark/50 p-4 rounded-lg border border-gray-600 hover:border-accent/50 transition duration-300">
                    <div class="flex items-center mb-3">
                        <span class="text-accent text-xl mr-3">🫙</span>
                        <h3 class="font-bold text-gray-100">Container Intelligence</h3>
                    </div>
                    <p class="text-gray-400 text-sm">Visual guides with specific container types and sizes for each product</p>
                </div>
                <div class="feature-card bg-primary-dark/50 p-4 rounded-lg border border-gray-600 hover:border-accent/50 transition duration-300">
                    <div class="flex items-center mb-3">
                        <span class="text-accent text-xl mr-3">📦</span>
                        <h3 class="font-bold text-gray-100">Pre-order System</h3>
                    </div>
                    <p class="text-gray-400 text-sm">Reserve items so stores prep your containers in advance, reducing wait time</p>
                </div>
                <div class="feature-card bg-primary-dark/50 p-4 rounded-lg border border-gray-600 hover:border-accent/50 transition duration-300">
                    <div class="flex items-center mb-3">
                        <span class="text-accent text-xl mr-3">📊</span>
                        <h3 class="font-bold text-gray-100">Impact Dashboard</h3>
                    </div>
                    <p class="text-gray-400 text-sm">Track waste saved, earn sustainability badges, and celebrate environmental impact</p>
                </div>
            </div>
        </section>

        <!-- Usability Testing -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                Validation & Iteration
            </h2>

            <div class="space-y-6">
                <!-- Iteration 1 -->
                <div class="bg-primary-dark/30 p-5 rounded-xl border border-gray-700">
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="before-section">
                            <div class="flex items-center mb-3">
                                <span class="text-red-400 mr-2">❌</span>
                                <span class="font-bold text-red-400">Before Testing</span>
                            </div>
                            <div class="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                                <p class="text-gray-300 mb-2"><strong>Issue:</strong> Abstract container instructions</p>
                                <p class="text-gray-400 text-sm italic">"Shopping List Item - Almonds - 200g, Container: Jar"</p>
                                <p class="text-gray-400 text-sm mt-1">Users didn't know what size jar to bring</p>
                            </div>
                        </div>
                        <div class="after-section">
                            <div class="flex items-center mb-3">
                                <span class="text-green-400 mr-2">✅</span>
                                <span class="font-bold text-green-400">After Testing</span>
                            </div>
                            <div class="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                                <p class="text-gray-300"><strong>Solution:</strong> Specific visual guidance</p>
                                <p class="text-accent text-sm mt-1">"Shopping List Item - Almonds - 200g, Glass jar 500ml minimum"</p>
                                <p class="text-accent text-sm">Clear visual + specific size eliminates confusion</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- User Feedback -->
                <div class="bg-primary-dark/30 p-5 rounded-xl border border-gray-700">
                    <div class="text-center">
                        <div class="flex items-center justify-center mb-3">
                            <span class="text-accent mr-2">💬</span>
                            <span class="font-bold text-accent">User Testimonials</span>
                        </div>
                        <div class="grid md:grid-cols-2 gap-4">
                            <div class="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30">
                                <p class="text-gray-300 text-sm italic">"This is exactly what I've been looking for! The container recommendations take all the guesswork out of zero-waste shopping."</p>
                                <p class="text-accent text-xs mt-2">— Test Participant #3</p>
                            </div>
                            <div class="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                                <p class="text-gray-300 text-sm italic">"The pre-order feature is genius. I hate waiting around in stores, so knowing everything is ready is perfect."</p>
                                <p class="text-accent text-xs mt-2">— Test Participant #7</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Reflection -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                Sustainable Impact & Learnings
            </h2>
            
            <div class="grid md:grid-cols-2 gap-6">
                <div class="learning-card bg-primary-dark/30 p-5 rounded-xl">
                    <h3 class="text-xl font-semibold text-accent mb-3 flex items-center">
                        <span class="text-lg mr-2">🌱</span>
                        Environmental Impact
                    </h3>
                    <ul class="text-gray-300 space-y-2">
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Projected reduction of 15,000 plastic bags per 1,000 users annually
                        </li>
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            3.2x increase in zero-waste store visits drives local sustainability
                        </li>
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Educational component raises awareness about waste reduction
                        </li>
                    </ul>
                </div>
                
                <div class="future-card bg-primary-dark/30 p-5 rounded-xl">
                    <h3 class="text-xl font-semibold text-accent mb-3 flex items-center">
                        <span class="text-lg mr-2">🚀</span>
                        Scaling Sustainability
                    </h3>
                    <ul class="text-gray-300 space-y-2">
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Partner with major grocery chains for wider adoption
                        </li>
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Carbon footprint tracking for all purchases
                        </li>
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Community features for sharing sustainable tips
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Final Quote -->
            <div class="mt-6 bg-gradient-to-r from-accent/10 to-transparent p-6 rounded-2xl border-l-4 border-accent">
                <blockquote class="text-lg italic text-gray-300 text-center">
                    "The most sustainable product is the one that people actually use. By removing friction and making eco-friendly choices effortless, we can turn intention into action and create real environmental change."
                </blockquote>
                <p class="text-accent text-center mt-3 font-semibold">— Sustainable Design Philosophy</p>
            </div>
        </section>
    `,
        tags: ["ui-ux", "user-research", "design-case-study", "sustainability", "mobile-app"],

        enhancedTags: {
            tools: ["Figma", "Maze", "FigJam", "User Testing Platforms"],
            methods: ["User Research", "Usability Testing", "Wireframing", "Prototyping"],
            skills: ["UX Design", "User Research", "Information Architecture", "Visual Design"]
        },
        figma: "https://www.figma.com/design/B1GVVaVSRFXgumLVdIAKin/The-Zero-Waste-Grocery-App?node-id=0-1&p=f&t=pLQxBkizUVGxb7X0-0",
        github: null,
        live: null,
        caseStudy: true,
        projectType: "ui-ux",
        images: [
            'images/grocery-1.png',
            'images/grocery-2.png',
            'images/grocery-3.png',
            'images/grocery-4.png',
           
        ],
        thumbnail: 'images/HeroSection.png'
    },
    {
        id: 5,
    title: "Wanderlust: Travel Booking Platform",
    summary: "Wanderlust is a travel booking platform that helps users discover, plan, and book their dream vacations. The platform focuses on creating an inspiring, visually-driven experience while maintaining simplicity in the booking flow.",
    description: `
        <!-- Hero Section -->
        <div class="case-study-hero mb-8">
            <div class="text-center mb-8">
                <h1 class="text-4xl md:text-5xl font-bold text-accent mb-4 gradient-text">Wanderlust Travel Platform</h1>
                <p class="text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
                    A modern travel discovery and booking experience designed to inspire wanderlust and simplify trip planning
                </p>
                <div class="flex flex-wrap justify-center gap-3 mb-6">
                    <span class="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">UI/UX Design</span>
                    <span class="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">Travel Tech</span>
                    <span class="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">Responsive Design</span>
                    <span class="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">Booking Platform</span>
                </div>
            </div>
        </div>

        <!-- Project Overview -->
        <div class="project-overview bg-gradient-to-r from-secondary-dark to-primary-dark p-6 rounded-2xl mb-8 border-l-4 border-accent">
            <div class="grid md:grid-cols-4 gap-6 text-center">
                <div class="stat-card">
                    <div class="text-3xl font-bold text-accent mb-2">100%</div>
                    <div class="text-gray-400 text-sm">Responsive Design</div>
                </div>
                <div class="stat-card">
                    <div class="text-3xl font-bold text-accent mb-2">20+</div>
                    <div class="text-gray-400 text-sm">Destinations</div>
                </div>
                <div class="stat-card">
                    <div class="text-3xl font-bold text-accent mb-2">12+</div>
                    <div class="text-gray-400 text-sm">Core Features</div>
                </div>
                <div class="stat-card">
                    <div class="text-3xl font-bold text-accent mb-2">7</div>
                    <div class="text-gray-400 text-sm">Page Sections</div>
                </div>
            </div>
        </div>

        <!-- The Challenge -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                The Challenge
            </h2>
            <div class="bg-primary-dark/50 p-6 rounded-xl border border-gray-700">
                <p class="text-lg text-gray-300 mb-4 leading-relaxed">
                    "Traditional travel booking platforms often overwhelm users with complex interfaces, generic destination presentations, and multi-step booking flows that cause frustration and abandonment."
                </p>
                <div class="grid md:grid-cols-2 gap-4 mt-4">
                    <div class="pain-point">
                        <div class="flex items-center mb-2">
                            <span class="text-red-400 mr-2">⚠️</span>
                            <span class="font-semibold text-gray-200">Key Pain Points</span>
                        </div>
                        <ul class="text-gray-400 space-y-2">
                            <li class="flex items-center">
                                <span class="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                                Overwhelming interfaces with too many options
                            </li>
                            <li class="flex items-center">
                                <span class="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                                Generic destination presentations
                            </li>
                            <li class="flex items-center">
                                <span class="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                                Complex multi-step booking flows
                            </li>
                            <li class="flex items-center">
                                <span class="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                                Poor mobile experiences
                            </li>
                        </ul>
                    </div>
                    <div class="research-insights">
                        <div class="flex items-center mb-2">
                            <span class="text-accent mr-2">🎯</span>
                            <span class="font-semibold text-gray-200">Design Goal</span>
                        </div>
                        <p class="text-gray-400">
                            Create an intuitive, visually compelling platform that inspires users to explore destinations while streamlining the booking process to just 3 simple steps.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Design Process -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                Design Process & Strategy
            </h2>
            
            <!-- Design Principles -->
            <div class="mb-6">
                <h3 class="text-xl font-semibold text-accent mb-4 flex items-center">
                    <span class="text-lg mr-2">💡</span>
                    Design Principles
                </h3>
                <div class="grid md:grid-cols-3 gap-4">
                    <div class="bg-primary-dark/50 p-4 rounded-lg border border-accent/20">
                        <div class="text-accent font-bold mb-2">Visual Storytelling</div>
                        <p class="text-gray-400 text-sm">Use high-quality imagery to create emotional connections and inspire travel dreams</p>
                    </div>
                    <div class="bg-primary-dark/50 p-4 rounded-lg border border-accent/20">
                        <div class="text-accent font-bold mb-2">Progressive Disclosure</div>
                        <p class="text-gray-400 text-sm">Reveal information gradually to reduce cognitive load and maintain user focus</p>
                    </div>
                    <div class="bg-primary-dark/50 p-4 rounded-lg border border-accent/20">
                        <div class="text-accent font-bold mb-2">Mobile-First Excellence</div>
                        <p class="text-gray-400 text-sm">Prioritize mobile experience while ensuring seamless desktop functionality</p>
                    </div>
                </div>
            </div>

            <!-- User Flow -->
            <div class="mb-6">
                <h3 class="text-xl font-semibold text-accent mb-4 flex items-center">
                    <span class="text-lg mr-2">🛣️</span>
                    Simplified User Journey
                </h3>
                <div class="bg-primary-dark/30 p-4 rounded-xl">
                    <div class="space-y-3">
                        <div class="flex items-start">
                            <div class="bg-blue-500/20 text-blue-300 px-3 py-2 rounded-lg mr-3">
                                <span class="font-semibold">Step 1:</span>
                            </div>
                            <div class="bg-gray-600/30 text-gray-300 px-3 py-2 rounded-lg flex-1">
                                <span class="font-semibold">Browse & Filter:</span> "Smart search with real-time filtering helps users quickly discover destinations"
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="bg-blue-500/20 text-blue-300 px-3 py-2 rounded-lg mr-3">
                                <span class="font-semibold">Step 2:</span>
                            </div>
                            <div class="bg-gray-600/30 text-gray-300 px-3 py-2 rounded-lg flex-1">
                                <span class="font-semibold">View Details:</span> "Comprehensive destination information in modal dialogs without leaving context"
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="bg-blue-500/20 text-blue-300 px-3 py-2 rounded-lg mr-3">
                                <span class="font-semibold">Step 3:</span>
                            </div>
                            <div class="bg-gray-600/30 text-gray-300 px-3 py-2 rounded-lg flex-1">
                                <span class="font-semibold">Book Trip:</span> "Streamlined booking process with clear pricing and instant confirmation"
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Key Features -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                Core Features
            </h2>
            <div class="grid md:grid-cols-2 gap-4">
                <div class="feature-card bg-primary-dark/50 p-4 rounded-lg border border-gray-600 hover:border-accent/50 transition duration-300">
                    <div class="flex items-center mb-3">
                        <span class="text-accent text-xl mr-3">🔍</span>
                        <h3 class="font-bold text-gray-100">Smart Search & Filtering</h3>
                    </div>
                    <p class="text-gray-400 text-sm">Real-time search with category filters helps users quickly narrow down destinations and find perfect matches</p>
                </div>
                <div class="feature-card bg-primary-dark/50 p-4 rounded-lg border border-gray-600 hover:border-accent/50 transition duration-300">
                    <div class="flex items-center mb-3">
                        <span class="text-accent text-xl mr-3">🏝️</span>
                        <h3 class="font-bold text-gray-100">Detailed Destination Views</h3>
                    </div>
                    <p class="text-gray-400 text-sm">Modal dialogs provide comprehensive destination information without disrupting the browsing experience</p>
                </div>
                <div class="feature-card bg-primary-dark/50 p-4 rounded-lg border border-gray-600 hover:border-accent/50 transition duration-300">
                    <div class="flex items-center mb-3">
                        <span class="text-accent text-xl mr-3">❤️</span>
                        <h3 class="font-bold text-gray-100">Favorites System</h3>
                    </div>
                    <p class="text-gray-400 text-sm">Save destinations with visual feedback through toast notifications and maintain wishlists for future trips</p>
                </div>
                <div class="feature-card bg-primary-dark/50 p-4 rounded-lg border border-gray-600 hover:border-accent/50 transition duration-300">
                    <div class="flex items-center mb-3">
                        <span class="text-accent text-xl mr-3">📋</span>
                        <h3 class="font-bold text-gray-100">Trip Management</h3>
                    </div>
                    <p class="text-gray-400 text-sm">Dedicated dashboard for managing upcoming trips, past adventures, and travel preferences</p>
                </div>
            </div>
        </section>

        <!-- Technical Implementation -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                Technical Implementation
            </h2>

            <div class="space-y-6">
                <!-- Tech Stack -->
                <div class="bg-primary-dark/30 p-5 rounded-xl border border-gray-700">
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="tech-stack">
                            <div class="flex items-center mb-3">
                                <span class="text-accent mr-2">⚙️</span>
                                <span class="font-bold text-accent">Tech Stack</span>
                            </div>
                            <div class="bg-accent/10 p-4 rounded-lg border border-accent/30">
                                <ul class="text-gray-300 space-y-2">
                                    <li class="flex items-start">
                                        <span class="text-accent mr-2">•</span>
                                        <strong>React + TypeScript:</strong> Type-safe component development
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-accent mr-2">•</span>
                                        <strong>Tailwind CSS v4:</strong> Utility-first styling with custom design tokens
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-accent mr-2">•</span>
                                        <strong>Framer Motion:</strong> Smooth animations and page transitions
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-accent mr-2">•</span>
                                        <strong>shadcn/ui:</strong> Accessible, customizable component library
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="design-principles">
                            <div class="flex items-center mb-3">
                                <span class="text-green-400 mr-2">🎨</span>
                                <span class="font-bold text-green-400">Design Principles</span>
                            </div>
                            <div class="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                                <ul class="text-gray-300 space-y-2">
                                    <li class="flex items-start">
                                        <span class="text-green-400 mr-2">•</span>
                                        Component-based architecture for reusability
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-green-400 mr-2">•</span>
                                        Responsive-first approach
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-green-400 mr-2">•</span>
                                        Accessibility-focused development
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-green-400 mr-2">•</span>
                                        Performance optimization
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Reflection -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                Key Learnings & Reflection
            </h2>
            
            <div class="grid md:grid-cols-2 gap-6">
                <div class="learning-card bg-primary-dark/30 p-5 rounded-xl">
                    <h3 class="text-xl font-semibold text-accent mb-3 flex items-center">
                        <span class="text-lg mr-2">🎓</span>
                        What I Learned
                    </h3>
                    <ul class="text-gray-300 space-y-2">
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Visual storytelling creates emotional connections that drive engagement
                        </li>
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Progressive disclosure reduces cognitive load and improves conversions
                        </li>
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Consistent design systems enable rapid development and maintainability
                        </li>
                    </ul>
                </div>
                
                <div class="future-card bg-primary-dark/30 p-5 rounded-xl">
                    <h3 class="text-xl font-semibold text-accent mb-3 flex items-center">
                        <span class="text-lg mr-2">🚀</span>
                        Future Enhancements
                    </h3>
                    <ul class="text-gray-300 space-y-2">
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            ML-based personalized destination recommendations
                        </li>
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Social features for trip sharing and collaborative planning
                        </li>
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Complete payment integration for end-to-end booking
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Final Quote -->
            <div class="mt-6 bg-gradient-to-r from-accent/10 to-transparent p-6 rounded-2xl border-l-4 border-accent">
                <blockquote class="text-lg italic text-gray-300 text-center">
                    "Wanderlust demonstrates that travel platforms should inspire first and transact second. By creating an experience that feels like the beginning of an adventure, we can turn casual browsers into passionate travelers."
                </blockquote>
                <p class="text-accent text-center mt-3 font-semibold">— Design Reflection</p>
            </div>
        </section>
        `,
        tags: ["ui-ux", "react", "typescript", "tailwind-css", "framer-motion", "design-system"],
          enhancedTags: {
            tools: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
            methods: ["Responsive Design", "Component Architecture", "User Testing"],
            skills: ["Frontend Development", "UI Design", "TypeScript", "React Development"]
        },
        figma: "https://www.figma.com/design/ugiyUvaKVfV1CAygXzgDRt/Wanderlust--Travel-Booking-Platform?node-id=0-1&p=f&t=qwaxiUz50ADkkWSR-0",
        github: null,
        live: null,
        caseStudy: true,
        projectType: "ui-ux",
        images: [
            'images/trvl-home.png',
            'images/destination.png',
            'images/trips.png',
            
        ],
        thumbnail: 'images/trvl-hero.png'
    },
    {
        id: 6,
    title: "Business card",
    summary: "Different variations of business cards",
    description: `
        <!-- Hero Section -->
        <div class="case-study-hero mb-8">
            <div class="text-center mb-8">
                <h1 class="text-4xl md:text-5xl font-bold text-accent mb-4 gradient-text">Business Card Design System</h1>
                <p class="text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
                    Creating memorable and professional business cards that effectively represent brand identity through thoughtful design variations
                </p>
                <div class="flex flex-wrap justify-center gap-3 mb-6">
                    <span class="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">Brand Identity</span>
                    <span class="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">Print Design</span>
                    <span class="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">Typography</span>
                    <span class="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">Visual Design</span>
                </div>
            </div>
        </div>

        <!-- Project Overview -->
        <div class="project-overview bg-gradient-to-r from-secondary-dark to-primary-dark p-6 rounded-2xl mb-8 border-l-4 border-accent">
            <div class="grid md:grid-cols-3 gap-6 text-center">
                <div class="stat-card">
                    <div class="text-3xl font-bold text-accent mb-2">5</div>
                    <div class="text-gray-400 text-sm">Design Variations</div>
                </div>
                <div class="stat-card">
                    <div class="text-3xl font-bold text-accent mb-2">100%</div>
                    <div class="text-gray-400 text-sm">Print Ready</div>
                </div>
                <div class="stat-card">
                    <div class="text-3xl font-bold text-accent mb-2">3</div>
                    <div class="text-gray-400 text-sm">Color Schemes</div>
                </div>
            </div>
        </div>

        <!-- The Challenge -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                The Challenge
            </h2>
            <div class="bg-primary-dark/50 p-6 rounded-xl border border-gray-700">
                <p class="text-lg text-gray-300 mb-4 leading-relaxed">
                    "Business cards often fail to make lasting impressions due to generic designs, poor typography, and lack of brand consistency. The goal was to create cards that not only communicate information but also embody the brand's personality."
                </p>
                <div class="grid md:grid-cols-2 gap-4 mt-4">
                    <div class="pain-point">
                        <div class="flex items-center mb-2">
                            <span class="text-red-400 mr-2">⚠️</span>
                            <span class="font-semibold text-gray-200">Common Issues</span>
                        </div>
                        <ul class="text-gray-400 space-y-2">
                            <li class="flex items-center">
                                <span class="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                                Generic templates lacking personality
                            </li>
                            <li class="flex items-center">
                                <span class="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                                Poor readability and typography hierarchy
                            </li>
                            <li class="flex items-center">
                                <span class="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                                Inconsistent brand representation
                            </li>
                            <li class="flex items-center">
                                <span class="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                                Low-quality materials and finishes
                            </li>
                        </ul>
                    </div>
                    <div class="research-insights">
                        <div class="flex items-center mb-2">
                            <span class="text-accent mr-2">🎯</span>
                            <span class="font-semibold text-gray-200">Design Objectives</span>
                        </div>
                        <ul class="text-gray-400 space-y-2">
                            <li>Create memorable first impressions</li>
                            <li>Ensure brand consistency across variations</li>
                            <li>Optimize for readability and scannability</li>
                            <li>Select appropriate materials and finishes</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Design Process -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                Design Process & Exploration
            </h2>
            
            <!-- Design Principles -->
            <div class="mb-6">
                <h3 class="text-xl font-semibold text-accent mb-4 flex items-center">
                    <span class="text-lg mr-2">💡</span>
                    Design Principles
                </h3>
                <div class="grid md:grid-cols-3 gap-4">
                    <div class="bg-primary-dark/50 p-4 rounded-lg border border-accent/20">
                        <div class="text-accent font-bold mb-2">Brand Consistency</div>
                        <p class="text-gray-400 text-sm">Maintain cohesive visual identity while allowing for creative variations</p>
                    </div>
                    <div class="bg-primary-dark/50 p-4 rounded-lg border border-accent/20">
                        <div class="text-accent font-bold mb-2">Information Hierarchy</div>
                        <p class="text-gray-400 text-sm">Prioritize essential contact information with clear typographic structure</p>
                    </div>
                    <div class="bg-primary-dark/50 p-4 rounded-lg border border-accent/20">
                        <div class="text-accent font-bold mb-2">Tactile Experience</div>
                        <p class="text-gray-400 text-sm">Consider paper stock, finishes, and physical interaction in the design</p>
                    </div>
                </div>
            </div>

            <!-- Design Variations -->
            <div class="mb-6">
                <h3 class="text-xl font-semibold text-accent mb-4 flex items-center">
                    <span class="text-lg mr-2">🎨</span>
                    Design Variations & Exploration
                </h3>
                <div class="bg-primary-dark/30 p-4 rounded-xl">
                    <div class="space-y-4">
                        <div class="flex items-start">
                            <div class="bg-blue-500/20 text-blue-300 px-3 py-2 rounded-lg mr-3">
                                <span class="font-semibold">Modern</span>
                            </div>
                            <div class="bg-gray-600/30 text-gray-300 px-3 py-2 rounded-lg flex-1">
                                Clean layouts with bold typography and minimal color palettes for contemporary professionals
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="bg-green-500/20 text-green-300 px-3 py-2 rounded-lg mr-3">
                                <span class="font-semibold">Creative</span>
                            </div>
                            <div class="bg-gray-600/30 text-gray-300 px-3 py-2 rounded-lg flex-1">
                                Experimental layouts with custom graphics and unique color combinations for design-focused clients
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="bg-purple-500/20 text-purple-300 px-3 py-2 rounded-lg mr-3">
                                <span class="font-semibold">Corporate</span>
                            </div>
                            <div class="bg-gray-600/30 text-gray-300 px-3 py-2 rounded-lg flex-1">
                                Traditional layouts with established hierarchies and professional color schemes for business environments
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Key Features -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                Design Elements & Features
            </h2>
            <div class="grid md:grid-cols-2 gap-4">
                <div class="feature-card bg-primary-dark/50 p-4 rounded-lg border border-gray-600 hover:border-accent/50 transition duration-300">
                    <div class="flex items-center mb-3">
                        <span class="text-accent text-xl mr-3">🔤</span>
                        <h3 class="font-bold text-gray-100">Typography Systems</h3>
                    </div>
                    <p class="text-gray-400 text-sm">Carefully selected font pairings with clear hierarchy for optimal readability and brand personality</p>
                </div>
                <div class="feature-card bg-primary-dark/50 p-4 rounded-lg border border-gray-600 hover:border-accent/50 transition duration-300">
                    <div class="flex items-center mb-3">
                        <span class="text-accent text-xl mr-3">🎨</span>
                        <h3 class="font-bold text-gray-100">Color Psychology</h3>
                    </div>
                    <p class="text-gray-400 text-sm">Strategic color schemes that evoke desired emotions and reinforce brand identity</p>
                </div>
                <div class="feature-card bg-primary-dark/50 p-4 rounded-lg border border-gray-600 hover:border-accent/50 transition duration-300">
                    <div class="flex items-center mb-3">
                        <span class="text-accent text-xl mr-3">📐</span>
                        <h3 class="font-bold text-gray-100">Layout Composition</h3>
                    </div>
                    <p class="text-gray-400 text-sm">Balanced visual arrangements that guide the eye and create harmonious designs</p>
                </div>
                <div class="feature-card bg-primary-dark/50 p-4 rounded-lg border border-gray-600 hover:border-accent/50 transition duration-300">
                    <div class="flex items-center mb-3">
                        <span class="text-accent text-xl mr-3">✋</span>
                        <h3 class="font-bold text-gray-100">Material Selection</h3>
                    </div>
                    <p class="text-gray-400 text-sm">High-quality cardstock with matte finishes to enhance tactile experience and durability</p>
                </div>
            </div>
        </section>

        <!-- Print Considerations -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                Print & Production Excellence
            </h2>

            <div class="space-y-6">
                <!-- Material Choices -->
                <div class="bg-primary-dark/30 p-5 rounded-xl border border-gray-700">
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="material-choices">
                            <div class="flex items-center mb-3">
                                <span class="text-accent mr-2">📄</span>
                                <span class="font-bold text-accent">Material Specifications</span>
                            </div>
                            <div class="bg-accent/10 p-4 rounded-lg border border-accent/30">
                                <ul class="text-gray-300 space-y-2">
                                    <li class="flex items-start">
                                        <span class="text-accent mr-2">•</span>
                                        <strong>Premium Cardstock:</strong> 300-400gsm for durability and premium feel
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-accent mr-2">•</span>
                                        <strong>Matte Finish:</strong> Reduces fingerprints and enhances color vibrancy
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-accent mr-2">•</span>
                                        <strong>Recycled Options:</strong> Environmentally conscious material choices
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="production-standards">
                            <div class="flex items-center mb-3">
                                <span class="text-green-400 mr-2">🖨️</span>
                                <span class="font-bold text-green-400">Production Standards</span>
                            </div>
                            <div class="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                                <ul class="text-gray-300 space-y-2">
                                    <li class="flex items-start">
                                        <span class="text-green-400 mr-2">•</span>
                                        CMYK color mode for accurate print reproduction
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-green-400 mr-2">•</span>
                                        Bleed areas and safe zones for professional results
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-green-400 mr-2">•</span>
                                        High-resolution assets for crisp, clear printing
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Reflection -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                Design Impact & Learnings
            </h2>
            
            <div class="grid md:grid-cols-2 gap-6">
                <div class="learning-card bg-primary-dark/30 p-5 rounded-xl">
                    <h3 class="text-xl font-semibold text-accent mb-3 flex items-center">
                        <span class="text-lg mr-2">🎓</span>
                        Key Insights
                    </h3>
                    <ul class="text-gray-300 space-y-2">
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Small details like corner radius and paper weight significantly impact perception
                        </li>
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Typography hierarchy is crucial for information scanning in physical media
                        </li>
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Color psychology plays a vital role in brand association and memorability
                        </li>
                    </ul>
                </div>
                
                <div class="future-card bg-primary-dark/30 p-5 rounded-xl">
                    <h3 class="text-xl font-semibold text-accent mb-3 flex items-center">
                        <span class="text-lg mr-2">🚀</span>
                        Future Applications
                    </h3>
                    <ul class="text-gray-300 space-y-2">
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Digital business card integration with NFC technology
                        </li>
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Sustainable and eco-friendly material innovations
                        </li>
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Interactive elements through augmented reality features
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Final Quote -->
            <div class="mt-6 bg-gradient-to-r from-accent/10 to-transparent p-6 rounded-2xl border-l-4 border-accent">
                <blockquote class="text-lg italic text-gray-300 text-center">
                    "A business card is more than contact information—it's a physical embodiment of brand personality. In a digital age, the tactile experience of a well-designed card creates memorable connections that screens cannot replicate."
                </blockquote>
                <p class="text-accent text-center mt-3 font-semibold">— Design Philosophy</p>
            </div>
        </section>
        `,
        tags: ["branding", "graphics", "print-design", "typography"],
         enhancedTags: {
            tools: ["Adobe Illustrator", "Photoshop", "Print Design Software"],
            methods: ["Brand Identity", "Visual Design", "Print Production"],
            skills: ["Graphic Design", "Branding", "Typography", "Print Design"]
        },
        figma: null,
        github: null,
        live: null,
        caseStudy: true,
        projectType: "branding",
        images: [
            'images/card-1.png',
            'images/card-2.png',
            'images/card-3.png',
            'images/card-4.png',
            'images/card-5.png'
        ],
        thumbnail: 'images/b.card.png'
    },

      {
        id: 7,
    title: "CineVerse — Movie App",
    summary: "CineVerse is a modern movie discovery app with real-time search, genre filtering, favorites and trailer playback built with React and The Movie Database (TMDb) API.",
    description: `
        <!-- Hero Section -->
        <div class="case-study-hero mb-8">
            <div class="text-center mb-8">
                <h1 class="text-4xl md:text-5xl font-bold text-accent mb-4 gradient-text">CineVerse Movie Discovery</h1>
                <p class="text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
                    A modern movie discovery platform bringing cinematic experiences to life with real-time search, intelligent filtering, and immersive content exploration
                </p>
                <div class="flex flex-wrap justify-center gap-3 mb-6">
                    <span class="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">React</span>
                    <span class="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">TMDB API</span>
                    <span class="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">Frontend</span>
                    <span class="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">Movie Discovery</span>
                </div>
            </div>
        </div>

        <!-- Project Overview -->
        <div class="project-overview bg-gradient-to-r from-secondary-dark to-primary-dark p-6 rounded-2xl mb-8 border-l-4 border-accent">
            <div class="grid md:grid-cols-4 gap-6 text-center">
                <div class="stat-card">
                    <div class="text-3xl font-bold text-accent mb-2">500K+</div>
                    <div class="text-gray-400 text-sm">Movies Database</div>
                </div>
                <div class="stat-card">
                    <div class="text-3xl font-bold text-accent mb-2">0ms</div>
                    <div class="text-gray-400 text-sm">Real-time Search</div>
                </div>
                <div class="stat-card">
                    <div class="text-3xl font-bold text-accent mb-2">20+</div>
                    <div class="text-gray-400 text-sm">Genre Filters</div>
                </div>
                <div class="stat-card">
                    <div class="text-3xl font-bold text-accent mb-2">4.8/5</div>
                    <div class="text-gray-400 text-sm">User Rating</div>
                </div>
            </div>
        </div>

        <!-- The Challenge -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                The Challenge
            </h2>
            <div class="bg-primary-dark/50 p-6 rounded-xl border border-gray-700">
                <p class="text-lg text-gray-300 mb-4 leading-relaxed">
                    "Existing movie platforms often overwhelm users with cluttered interfaces, slow search performance, and disconnected experiences between discovery and content consumption."
                </p>
                <div class="grid md:grid-cols-2 gap-4 mt-4">
                    <div class="pain-point">
                        <div class="flex items-center mb-2">
                            <span class="text-red-400 mr-2">⚠️</span>
                            <span class="font-semibold text-gray-200">User Pain Points</span>
                        </div>
                        <ul class="text-gray-400 space-y-2">
                            <li class="flex items-center">
                                <span class="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                                Slow and inaccurate movie search functionality
                            </li>
                            <li class="flex items-center">
                                <span class="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                                Limited filtering options for genre exploration
                            </li>
                            <li class="flex items-center">
                                <span class="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                                Disconnected trailer viewing experience
                            </li>
                            <li class="flex items-center">
                                <span class="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                                No personalized watchlist management
                            </li>
                        </ul>
                    </div>
                    <div class="research-insights">
                        <div class="flex items-center mb-2">
                            <span class="text-accent mr-2">🎯</span>
                            <span class="font-semibold text-gray-200">Solution Goals</span>
                        </div>
                        <ul class="text-gray-400 space-y-2">
                            <li>Instant real-time search with predictive results</li>
                            <li>Comprehensive genre and category filtering</li>
                            <li>Seamless trailer integration</li>
                            <li>Personalized favorites system</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Technical Architecture -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                Technical Architecture
            </h2>
            
            <!-- Tech Stack -->
            <div class="mb-6">
                <h3 class="text-xl font-semibold text-accent mb-4 flex items-center">
                    <span class="text-lg mr-2">⚙️</span>
                    Technology Stack
                </h3>
                <div class="grid md:grid-cols-3 gap-4">
                    <div class="bg-primary-dark/50 p-4 rounded-lg border border-accent/20">
                        <div class="text-accent font-bold mb-2">Frontend Framework</div>
                        <p class="text-gray-400 text-sm">React with React Router for seamless single-page application navigation</p>
                    </div>
                    <div class="bg-primary-dark/50 p-4 rounded-lg border border-accent/20">
                        <div class="text-accent font-bold mb-2">Data Source</div>
                        <p class="text-gray-400 text-sm">The Movie Database (TMDb) API providing comprehensive movie metadata</p>
                    </div>
                    <div class="bg-primary-dark/50 p-4 rounded-lg border border-accent/20">
                        <div class="text-accent font-bold mb-2">Content Integration</div>
                        <p class="text-gray-400 text-sm">YouTube API for seamless trailer playback and video content</p>
                    </div>
                </div>
            </div>

            <!-- User Experience Flow -->
            <div class="mb-6">
                <h3 class="text-xl font-semibold text-accent mb-4 flex items-center">
                    <span class="text-lg mr-2">🎬</span>
                    Movie Discovery Experience
                </h3>
                <div class="bg-primary-dark/30 p-4 rounded-xl">
                    <div class="space-y-3">
                        <div class="flex items-start">
                            <div class="bg-blue-500/20 text-blue-300 px-3 py-2 rounded-lg mr-3">
                                <span class="font-semibold">Browse:</span>
                            </div>
                            <div class="bg-gray-600/30 text-gray-300 px-3 py-2 rounded-lg flex-1">
                                <span class="font-semibold">Multiple Categories:</span> "Trending, Popular, Top Rated, and Now Playing sections with infinite scroll loading"
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="bg-blue-500/20 text-blue-300 px-3 py-2 rounded-lg mr-3">
                                <span class="font-semibold">Discover:</span>
                            </div>
                            <div class="bg-gray-600/30 text-gray-300 px-3 py-2 rounded-lg flex-1">
                                <span class="font-semibold">Smart Filtering:</span> "20+ genre filters with real-time results and visual movie cards"
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="bg-blue-500/20 text-blue-300 px-3 py-2 rounded-lg mr-3">
                                <span class="font-semibold">Engage:</span>
                            </div>
                            <div class="bg-gray-600/30 text-gray-300 px-3 py-2 rounded-lg flex-1">
                                <span class="font-semibold">Rich Details:</span> "Cast information, director credits, ratings, runtime, and integrated trailer playback"
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Key Features -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                Core Features
            </h2>
            <div class="grid md:grid-cols-2 gap-4">
                <div class="feature-card bg-primary-dark/50 p-4 rounded-lg border border-gray-600 hover:border-accent/50 transition duration-300">
                    <div class="flex items-center mb-3">
                        <span class="text-accent text-xl mr-3">⚡</span>
                        <h3 class="font-bold text-gray-100">Real-time Search</h3>
                    </div>
                    <p class="text-gray-400 text-sm">Instant search functionality with predictive results and debounced API calls for optimal performance</p>
                </div>
                <div class="feature-card bg-primary-dark/50 p-4 rounded-lg border border-gray-600 hover:border-accent/50 transition duration-300">
                    <div class="flex items-center mb-3">
                        <span class="text-accent text-xl mr-3">🎭</span>
                        <h3 class="font-bold text-gray-100">Genre Filtering</h3>
                    </div>
                    <p class="text-gray-400 text-sm">Comprehensive genre-based filtering with 20+ categories and instant results updating</p>
                </div>
                <div class="feature-card bg-primary-dark/50 p-4 rounded-lg border border-gray-600 hover:border-accent/50 transition duration-300">
                    <div class="flex items-center mb-3">
                        <span class="text-accent text-xl mr-3">❤️</span>
                        <h3 class="font-bold text-gray-100">Favorites System</h3>
                    </div>
                    <p class="text-gray-400 text-sm">Personalized watchlist management with localStorage persistence and intuitive toggle interactions</p>
                </div>
                <div class="feature-card bg-primary-dark/50 p-4 rounded-lg border border-gray-600 hover:border-accent/50 transition duration-300">
                    <div class="flex items-center mb-3">
                        <span class="text-accent text-xl mr-3">🎥</span>
                        <h3 class="font-bold text-gray-100">Trailer Integration</h3>
                    </div>
                    <p class="text-gray-400 text-sm">Seamless YouTube trailer playback within modal overlays for immediate content consumption</p>
                </div>
            </div>
        </section>

        <!-- Technical Implementation -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                Technical Excellence
            </h2>

            <div class="space-y-6">
                <!-- Performance Optimization -->
                <div class="bg-primary-dark/30 p-5 rounded-xl border border-gray-700">
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="performance-section">
                            <div class="flex items-center mb-3">
                                <span class="text-accent mr-2">🚀</span>
                                <span class="font-bold text-accent">Performance Features</span>
                            </div>
                            <div class="bg-accent/10 p-4 rounded-lg border border-accent/30">
                                <ul class="text-gray-300 space-y-2">
                                    <li class="flex items-start">
                                        <span class="text-accent mr-2">•</span>
                                        <strong>Debounced Search:</strong> 300ms delay reduces API calls by 70%
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-accent mr-2">•</span>
                                        <strong>Infinite Scroll:</strong> Load More pagination for seamless browsing
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-accent mr-2">•</span>
                                        <strong>Skeleton Loading:</strong> Visual placeholders during data fetching
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="user-experience">
                            <div class="flex items-center mb-3">
                                <span class="text-green-400 mr-2">💫</span>
                                <span class="font-bold text-green-400">UX Enhancements</span>
                            </div>
                            <div class="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                                <ul class="text-gray-300 space-y-2">
                                    <li class="flex items-start">
                                        <span class="text-green-400 mr-2">•</span>
                                        Responsive mobile-first design
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-green-400 mr-2">•</span>
                                        Accessible navigation and interactions
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-green-400 mr-2">•</span>
                                        Smooth transitions and hover states
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Deployment Strategy -->
                <div class="bg-primary-dark/30 p-5 rounded-xl border border-gray-700">
                    <h3 class="text-xl font-semibold text-accent mb-4 flex items-center">
                        <span class="text-lg mr-2">🌐</span>
                        Deployment & Production
                    </h3>
                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30">
                            <h4 class="font-semibold text-blue-300 mb-2">GitHub Pages</h4>
                            <p class="text-gray-300 text-sm">Hash-based routing strategy for seamless SPA deployment on GitHub Pages</p>
                        </div>
                        <div class="bg-purple-500/10 p-4 rounded-lg border border-purple-500/30">
                            <h4 class="font-semibold text-purple-300 mb-2">Vercel</h4>
                            <p class="text-gray-300 text-sm">Optimized production builds with automatic deployments and global CDN</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Reflection -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                Development Insights & Reflection
            </h2>
            
            <div class="grid md:grid-cols-2 gap-6">
                <div class="learning-card bg-primary-dark/30 p-5 rounded-xl">
                    <h3 class="text-xl font-semibold text-accent mb-3 flex items-center">
                        <span class="text-lg mr-2">🎓</span>
                        Technical Learnings
                    </h3>
                    <ul class="text-gray-300 space-y-2">
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            API rate limiting requires strategic request batching and caching
                        </li>
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Debounced search dramatically improves performance and user experience
                        </li>
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Skeleton loading states are crucial for perceived performance
                        </li>
                    </ul>
                </div>
                
                <div class="future-card bg-primary-dark/30 p-5 rounded-xl">
                    <h3 class="text-xl font-semibold text-accent mb-3 flex items-center">
                        <span class="text-lg mr-2">🚀</span>
                        Future Enhancements
                    </h3>
                    <ul class="text-gray-300 space-y-2">
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Advanced recommendation engine based on viewing history
                        </li>
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Social features for sharing and discussing movies
                        </li>
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Offline capabilities with service workers and caching
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Final Quote -->
            <div class="mt-6 bg-gradient-to-r from-accent/10 to-transparent p-6 rounded-2xl border-l-4 border-accent">
                <blockquote class="text-lg italic text-gray-300 text-center">
                    "Building CineVerse taught me that great movie discovery isn't about showing everything at once—it's about creating intuitive pathways that help users find their next favorite film through smart design and seamless technology."
                </blockquote>
                <p class="text-accent text-center mt-3 font-semibold">— Development Reflection</p>
            </div>
        </section>
        `,
        tags: ["web-dev", "tmdb-api", "frontend", "movie-app"],
         enhancedTags: {
            tools: ["React", "React Router", "TMDB API", "JavaScript", "CSS"],
            methods: ["API Integration", "State Management", "Responsive Design"],
            skills: ["Frontend Development", "API Integration", "React Hooks", "UI Design"]
        },
        github: "https://github.com/busa0019/Movie-App",
        live: "https://movie-app-gamma-peach.vercel.app/",
        figma: null,
        caseStudy: true,
        projectType: "web-dev",
        images: [
            'images/movie-1.png',
            'images/movie-2.png',
            'images/movie-3.png',
            'images/movie-4.png',
            'images/movie-5.png'
        ],
        thumbnail: 'images/movie-app.png'
    },
    {
      id: 8,
    title: "Kids Bowling League Website Redesign",
    summary: "A comprehensive redesign of the Kids Bowling League website, enhancing user experience with a modern UI and updated logo to promote youth bowling leagues globally.",
    description: `
        <!-- Hero Section -->
        <div class="case-study-hero mb-8">
            <div class="text-center mb-8">
                <h1 class="text-4xl md:text-5xl font-bold text-accent mb-4 gradient-text">Kids Bowling League Redesign</h1>
                <p class="text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
                    Transforming youth bowling promotion with a modern, engaging website redesign and vibrant brand identity
                </p>
                <div class="flex flex-wrap justify-center gap-3 mb-6">
                    <span class="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">Website Redesign</span>
                    <span class="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">Logo Design</span>
                    <span class="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">UI/UX</span>
                    <span class="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">Youth Sports</span>
                </div>
            </div>
        </div>

        <!-- Project Overview -->
        <div class="project-overview bg-gradient-to-r from-secondary-dark to-primary-dark p-6 rounded-2xl mb-8 border-l-4 border-accent">
            <div class="grid md:grid-cols-4 gap-6 text-center">
                <div class="stat-card">
                    <div class="text-3xl font-bold text-accent mb-2">4</div>
                    <div class="text-gray-400 text-sm">Week Project</div>
                </div>
                <div class="stat-card">
                    <div class="text-3xl font-bold text-accent mb-2">100%</div>
                    <div class="text-gray-400 text-sm">Mobile Responsive</div>
                </div>
                <div class="stat-card">
                    <div class="text-3xl font-bold text-accent mb-2">5+</div>
                    <div class="text-gray-400 text-sm">Competitor Analyses</div>
                </div>
                <div class="stat-card">
                    <div class="text-3xl font-bold text-accent mb-2">68%</div>
                    <div class="text-gray-400 text-sm">Frustration Reduction</div>
                </div>
            </div>
        </div>

        <!-- The Challenge -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                The Modernization Challenge
            </h2>
            <div class="bg-primary-dark/50 p-6 rounded-xl border border-gray-700">
                <p class="text-lg text-gray-300 mb-4 leading-relaxed">
                    "The original Kids Bowling League website suffered from outdated design, poor navigation, and a generic logo that failed to capture the energetic spirit of youth bowling, making it difficult for parents to register children and find league information."
                </p>
                <div class="grid md:grid-cols-2 gap-4 mt-4">
                    <div class="pain-point">
                        <div class="flex items-center mb-2">
                            <span class="text-red-400 mr-2">⚠️</span>
                            <span class="font-semibold text-gray-200">Original Website Issues</span>
                        </div>
                        <ul class="text-gray-400 space-y-2">
                            <li class="flex items-center">
                                <span class="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                                Cluttered layouts with poor information hierarchy
                            </li>
                            <li class="flex items-center">
                                <span class="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                                Outdated visual design and color scheme
                            </li>
                            <li class="flex items-center">
                                <span class="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                                Non-responsive design breaking on mobile devices
                            </li>
                            <li class="flex items-center">
                                <span class="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                                Generic logo lacking brand personality
                            </li>
                        </ul>
                    </div>
                    <div class="research-insights">
                        <div class="flex items-center mb-2">
                            <span class="text-accent mr-2">🔍</span>
                            <span class="font-semibold text-gray-200">Research & Analysis</span>
                        </div>
                        <ul class="text-gray-400 space-y-2">
                            <li>Competitor analysis of Kids Bowl Free and similar platforms</li>
                            <li>User feedback review identifying key pain points</li>
                            <li>Mobile usage patterns analysis</li>
                            <li>Two weeks of app analytics reviewed</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Design Strategy -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                Design Strategy & Process
            </h2>
            
            <!-- Design Principles -->
            <div class="mb-6">
                <h3 class="text-xl font-semibold text-accent mb-4 flex items-center">
                    <span class="text-lg mr-2">💡</span>
                    Redesign Principles
                </h3>
                <div class="grid md:grid-cols-3 gap-4">
                    <div class="bg-primary-dark/50 p-4 rounded-lg border border-accent/20">
                        <div class="text-accent font-bold mb-2">Youthful Energy</div>
                        <p class="text-gray-400 text-sm">Capture the fun and excitement of bowling through vibrant colors and dynamic elements</p>
                    </div>
                    <div class="bg-primary-dark/50 p-4 rounded-lg border border-accent/20">
                        <div class="text-accent font-bold mb-2">Parent-Friendly</div>
                        <p class="text-gray-400 text-sm">Simplify registration and information finding for busy parents with clear navigation</p>
                    </div>
                    <div class="bg-primary-dark/50 p-4 rounded-lg border border-accent/20">
                        <div class="text-accent font-bold mb-2">Mobile Excellence</div>
                        <p class="text-gray-400 text-sm">Prioritize mobile experience where most parents access information on-the-go</p>
                    </div>
                </div>
            </div>

            <!-- Logo Transformation -->
            <div class="mb-6">
                <h3 class="text-xl font-semibold text-accent mb-4 flex items-center">
                    <span class="text-lg mr-2">🎯</span>
                    Brand Identity Evolution
                </h3>
                <div class="bg-primary-dark/30 p-4 rounded-xl">
                    <div class="space-y-3">
                        <div class="flex items-start">
                            <div class="bg-red-500/20 text-red-300 px-3 py-2 rounded-lg mr-3">
                                <span class="font-semibold">Before:</span>
                            </div>
                            <div class="bg-gray-600/30 text-gray-300 px-3 py-2 rounded-lg flex-1">
                                <span class="font-semibold">Generic Identity:</span> "Basic typographic logo lacking personality and failing to communicate youth energy or bowling theme"
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="bg-green-500/20 text-green-300 px-3 py-2 rounded-lg mr-3">
                                <span class="font-semibold">After:</span>
                            </div>
                            <div class="bg-gray-600/30 text-gray-300 px-3 py-2 rounded-lg flex-1">
                                <span class="font-semibold">Vibrant Identity:</span> "Custom logo featuring stylized bowling pin, playful typography, and energetic color palette embodying youth bowling excitement"
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Key Features -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                Redesign Highlights
            </h2>
            <div class="grid md:grid-cols-2 gap-4">
                <div class="feature-card bg-primary-dark/50 p-4 rounded-lg border border-gray-600 hover:border-accent/50 transition duration-300">
                    <div class="flex items-center mb-3">
                        <span class="text-accent text-xl mr-3">🎨</span>
                        <h3 class="font-bold text-gray-100">Modern Visual Design</h3>
                    </div>
                    <p class="text-gray-400 text-sm">Clean, vibrant interface with intuitive navigation and age-appropriate visual elements</p>
                </div>
                <div class="feature-card bg-primary-dark/50 p-4 rounded-lg border border-gray-600 hover:border-accent/50 transition duration-300">
                    <div class="flex items-center mb-3">
                        <span class="text-accent text-xl mr-3">📱</span>
                        <h3 class="font-bold text-gray-100">Mobile-First Responsive</h3>
                    </div>
                    <p class="text-gray-400 text-sm">Fully responsive design optimized for mobile devices where parents most frequently access information</p>
                </div>
                <div class="feature-card bg-primary-dark/50 p-4 rounded-lg border border-gray-600 hover:border-accent/50 transition duration-300">
                    <div class="flex items-center mb-3">
                        <span class="text-accent text-xl mr-3">⚡</span>
                        <h3 class="font-bold text-gray-100">Streamlined Registration</h3>
                    </div>
                    <p class="text-gray-400 text-sm">Simplified sign-up process with clear age category filters (5 & under to 16-17) and step-by-step guidance</p>
                </div>
                <div class="feature-card bg-primary-dark/50 p-4 rounded-lg border border-gray-600 hover:border-accent/50 transition duration-300">
                    <div class="flex items-center mb-3">
                        <span class="text-accent text-xl mr-3">🔍</span>
                        <h3 class="font-bold text-gray-100">Enhanced Content</h3>
                    </div>
                    <p class="text-gray-400 text-sm">Improved information architecture with better league details, testimonials, and FAQ sections</p>
                </div>
            </div>
        </section>

        <!-- User Experience Impact -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                User Experience Transformation
            </h2>

            <div class="space-y-6">
                <!-- Navigation Improvement -->
                <div class="bg-primary-dark/30 p-5 rounded-xl border border-gray-700">
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="before-section">
                            <div class="flex items-center mb-3">
                                <span class="text-red-400 mr-2">❌</span>
                                <span class="font-bold text-red-400">Before Redesign</span>
                            </div>
                            <div class="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                                <p class="text-gray-300 mb-2"><strong>Complex Navigation:</strong> Buried registration links and confusing menu structure</p>
                                <p class="text-gray-400 text-sm italic">"Parents reported taking 5+ minutes to find registration information and league details"</p>
                            </div>
                        </div>
                        <div class="after-section">
                            <div class="flex items-center mb-3">
                                <span class="text-green-400 mr-2">✅</span>
                                <span class="font-bold text-green-400">After Redesign</span>
                            </div>
                            <div class="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                                <p class="text-gray-300"><strong>Streamlined Experience:</strong> Clear call-to-action buttons and intuitive information architecture</p>
                                <p class="text-accent text-sm mt-1">"Registration process reduced to under 60 seconds with prominent CTAs and guided steps"</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mobile Experience -->
                <div class="bg-primary-dark/30 p-5 rounded-xl border border-gray-700">
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="before-section">
                            <div class="flex items-center mb-3">
                                <span class="text-red-400 mr-2">📵</span>
                                <span class="font-bold text-red-400">Mobile Challenges</span>
                            </div>
                            <div class="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                                <p class="text-gray-300 mb-2"><strong>Non-Responsive Design:</strong> Broken layouts and unreadable text on mobile devices</p>
                                <p class="text-gray-400 text-sm italic">"68% of users reported frustration trying to use the website on their phones"</p>
                            </div>
                        </div>
                        <div class="after-section">
                            <div class="flex items-center mb-3">
                                <span class="text-green-400 mr-2">📱</span>
                                <span class="font-bold text-green-400">Mobile Excellence</span>
                            </div>
                            <div class="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                                <p class="text-gray-300"><strong>Optimized Experience:</strong> Fully responsive design with touch-friendly interfaces</p>
                                <p class="text-accent text-sm mt-1">"Seamless mobile experience with optimized forms, readable text, and intuitive touch navigation"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Reflection -->
        <section class="mb-8">
            <h2 class="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <span class="w-3 h-3 bg-accent rounded-full mr-3"></span>
                Design Impact & Learnings
            </h2>
            
            <div class="grid md:grid-cols-2 gap-6">
                <div class="learning-card bg-primary-dark/30 p-5 rounded-xl">
                    <h3 class="text-xl font-semibold text-accent mb-3 flex items-center">
                        <span class="text-lg mr-2">🎓</span>
                        Key Insights
                    </h3>
                    <ul class="text-gray-300 space-y-2">
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Youth sports websites must cater to both children's excitement and parents' practical needs
                        </li>
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Mobile optimization is non-negotiable for parent-focused services
                        </li>
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Clear visual hierarchy dramatically improves information finding and task completion
                        </li>
                    </ul>
                </div>
                
                <div class="future-card bg-primary-dark/30 p-5 rounded-xl">
                    <h3 class="text-xl font-semibold text-accent mb-3 flex items-center">
                        <span class="text-lg mr-2">🚀</span>
                        Potential Impact
                    </h3>
                    <ul class="text-gray-300 space-y-2">
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Increased youth participation through more engaging presentation
                        </li>
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Higher parent satisfaction with streamlined registration process
                        </li>
                        <li class="flex items-start">
                            <span class="text-accent mr-2">•</span>
                            Stronger brand recognition with memorable visual identity
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Final Quote -->
            <div class="mt-6 bg-gradient-to-r from-accent/10 to-transparent p-6 rounded-2xl border-l-4 border-accent">
                <blockquote class="text-lg italic text-gray-300 text-center">
                    "Redesigning the Kids Bowling League taught me that youth sports platforms have two audiences: the children who seek excitement and the parents who need clarity. Successful design speaks to both simultaneously, creating experiences that are both fun and functional."
                </blockquote>
                <p class="text-accent text-center mt-3 font-semibold">— Design Leadership Reflection</p>
            </div>
        </section>
    `,
    tags: ["ui-ux", "web-design", "logo-design", "responsive-design"],
   enhancedTags: {
            tools: ["Figma", "Adobe Illustrator", "Web Design Principles"],
            methods: ["Website Redesign", "User Research", "Visual Design", "Logo Design"],
            skills: ["UI/UX Design", "Brand Identity", "Web Design", "Graphic Design"]
        },
        figma: "https://www.figma.com/design/T9x4qTDTHQpge6dSb8U1lX/KBL-Redesign?node-id=0-1&t=foer5P6zxRNXNhNr-1",
        github: null,
        live: null,
        caseStudy: true,
        projectType: "ui-ux",
    images: [
        'images/kbl-1.png',
        'images/kbl-2.png',
        'images/kbl-3.png',
        'images/kbl-4.png',
        'images/kbl-5.png'
    ],
    thumbnail: 'images/kbl.png'
}
];


// Mobile Menu Functions
const mobileMenu = document.getElementById('mobile-menu');
const menuButton = document.getElementById('menu-button');
const closeMenuButton = document.getElementById('close-menu-button');

function openMenu() {
    mobileMenu.classList.remove('hidden');
    setTimeout(() => { mobileMenu.classList.remove('opacity-0'); }, 10);
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    mobileMenu.classList.add('opacity-0');
    setTimeout(() => { mobileMenu.classList.add('hidden'); }, 300);
    document.body.style.overflow = 'auto';
}

menuButton.addEventListener('click', openMenu);
closeMenuButton.addEventListener('click', closeMenu);

// Services Toggle Function
function toggleService(card) {
    const details = card.querySelector('.service-details');
    const sign = card.querySelector('.click-sign');
    
    if (details.classList.contains('hidden')) {
        details.classList.remove('hidden');
        sign.innerHTML = '&minus;';
        card.classList.add('bg-gray-800');
        card.classList.remove('bg-primary-dark');
    } else {
        details.classList.add('hidden');
        sign.innerHTML = '&plus;';
        card.classList.remove('bg-gray-800');
        card.classList.add('bg-primary-dark');
    }
}

// Contact Form Submission
function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formMessage = document.getElementById('form-message');
    
    formMessage.classList.remove('hidden');
    formMessage.innerHTML = '<span class="text-accent font-semibold">Message Sent!</span> Thank you for reaching out. I will respond within 48 hours.';
    formMessage.classList.add('bg-primary-dark', 'p-4', 'rounded-lg', 'text-gray-300');
    form.reset();

    setTimeout(() => {
        formMessage.classList.add('hidden');
    }, 5000);
}

// Portfolio Modal Functions
const projectModal = document.getElementById('project-modal');
const mainProjectImage = document.getElementById('main-project-image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function updateImageDisplay() {
    if (currentProjectImages.length === 0) return;
    mainProjectImage.src = currentProjectImages[currentImageIndex];
    
    prevBtn.classList.toggle('hidden', currentProjectImages.length <= 1 || currentImageIndex === 0);
    nextBtn.classList.toggle('hidden', currentProjectImages.length <= 1 || currentImageIndex === currentProjectImages.length - 1);

    document.querySelectorAll('.thumbnail-image').forEach((thumb, index) => {
        thumb.classList.remove('border-accent', 'border-4');
        thumb.classList.add('border-2', 'border-gray-700');
        if (index === currentImageIndex) {
            thumb.classList.add('border-accent', 'border-4');
            thumb.classList.remove('border-2', 'border-gray-700');
        }
    });
}

function navigateImage(direction) {
    const newIndex = currentImageIndex + direction;
    if (newIndex >= 0 && newIndex < currentProjectImages.length) {
        currentImageIndex = newIndex;
        updateImageDisplay();
    }
}

function selectImage(index) {
    currentImageIndex = index;
    updateImageDisplay();
}

function showProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    
    if (modalTitle) modalTitle.textContent = project.title;
    if (modalDescription) modalDescription.innerHTML = project.description;
    
    // Enhanced link handling based on project type
    const githubLink = document.getElementById('modal-github');
    const liveLink = document.getElementById('modal-live');
    const figmaLink = document.getElementById('modal-figma');
    
    // Reset all links
     if (githubLink) githubLink.classList.add('hidden');
    if (liveLink) liveLink.classList.add('hidden');
    if (figmaLink) figmaLink.classList.add('hidden');
    
    // Show appropriate links based on project type and availability
     if (project.github && githubLink) {
        githubLink.href = project.github;
        githubLink.classList.remove('hidden');
    }

    if (project.live && liveLink) {
        liveLink.href = project.live;
        liveLink.classList.remove('hidden');
    }

    if (project.figma && figmaLink) {
        figmaLink.href = project.figma;
        figmaLink.classList.remove('hidden');
    }

    // Enhanced tags display
    const tagsContainer = document.getElementById('modal-tags');
    if (tagsContainer) {
        if (project.enhancedTags) {
            tagsContainer.innerHTML = `
                <div class="modal-tags-container">
                    <div class="mb-4">
                        <h4 class="text-accent font-semibold mb-2 flex items-center">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            Tools & Technologies
                        </h4>
                        <div class="flex flex-wrap gap-2">
                            ${project.enhancedTags.tools.map(tool => `<span class="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/30">${tool}</span>`).join('')}
                        </div>
                    </div>
                    <div class="mb-4">
                        <h4 class="text-accent font-semibold mb-2 flex items-center">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                            </svg>
                            Methods & Processes
                        </h4>
                        <div class="flex flex-wrap gap-2">
                            ${project.enhancedTags.methods.map(method => `<span class="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-medium border border-green-500/30">${method}</span>`).join('')}
                        </div>
                    </div>
                    <div>
                        <h4 class="text-accent font-semibold mb-2 flex items-center">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                            </svg>
                            Skills Demonstrated
                        </h4>
                        <div class="flex flex-wrap gap-2">
                            ${project.enhancedTags.skills.map(skill => `<span class="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium border border-purple-500/30">${skill}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else {
            // Fallback for old tag structure
            tagsContainer.innerHTML = project.tags.map(tag =>
                `<span class="bg-gray-700 text-accent px-3 py-1 rounded-full text-xs font-medium">${tag}</span>`
            ).join('');
        }
    }

    currentProjectImages = project.images;
    currentImageIndex = 0;
    updateImageDisplay();
    
    const thumbnailCarousel = document.getElementById('thumbnail-carousel');
    thumbnailCarousel.innerHTML = project.images.map((img, index) => `
        <img src="${img}" alt="Thumbnail ${index + 1}" 
            class="thumbnail-image w-20 h-16 object-cover rounded-lg cursor-pointer border-2 border-gray-700 hover:border-accent/70 transition duration-200"
            onclick="selectImage(${index})"
        >
    `).join('');
    
    projectModal.classList.remove('hidden');
    setTimeout(() => { projectModal.classList.remove('opacity-0'); }, 10);
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    projectModal.classList.add('opacity-0');
    setTimeout(() => { 
        projectModal.classList.add('hidden'); 
        document.body.style.overflow = 'auto';
    }, 300);
}

function handleBackdropClose(event) {
    if (event.target.id === 'project-modal') {
        closeProjectModal();
    }
}

// Lightbox Functions
const lightboxModal = document.getElementById('lightbox-modal');
const lightboxImage = document.getElementById('lightbox-image');

function openLightbox(src) {
    lightboxImage.src = src;
    lightboxModal.classList.remove('hidden');
    setTimeout(() => { lightboxModal.classList.remove('opacity-0'); }, 10);
    document.body.style.overflow = 'hidden';
}

function closeLightbox(event) {
    if (event.target === lightboxModal || event.target.classList.contains('text-4xl')) {
        lightboxModal.classList.add('opacity-0');
        setTimeout(() => { 
            lightboxModal.classList.add('hidden'); 
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

// Portfolio Filter and Render Functions
function updateProjectDisplay(filteredProjects) {
    const carousel = document.getElementById('portfolio-carousel');
    if (!carousel) return;
    
    carousel.innerHTML = filteredProjects.map(project => `
        <div class="snap-start w-72 md:w-80 flex-shrink-0 bg-primary-dark rounded-xl shadow-2xl p-6 border border-gray-800 hover:border-accent transition duration-300 transform hover:-translate-y-1 cursor-pointer opacity-0 translate-y-5" 
             data-filter="${project.tags.join(' ')}"
             onclick="showProjectModal(${project.id})" data-animate data-delay="300">
            <img src="${project.thumbnail}" alt="${project.title} thumbnail" class="w-full h-40 object-cover rounded-lg mb-4">
            <h3 class="text-xl font-semibold text-gray-100 mb-2">${project.title}</h3>
            <p class="text-sm text-gray-400 mb-4">${project.summary}</p>
            <div class="flex flex-wrap gap-2">
                ${project.tags.map(tag => `<span class="bg-gray-700 text-xs text-accent px-2 py-0.5 rounded">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');

    initAnimations();
}

function filterProjects(filter) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('bg-accent', 'text-primary-dark');
        btn.classList.add('bg-secondary-dark', 'text-gray-300', 'hover:bg-accent', 'hover:text-primary-dark');
        if (btn.getAttribute('data-filter') === filter) {
            btn.classList.add('bg-accent', 'text-primary-dark');
            btn.classList.remove('bg-secondary-dark', 'text-gray-300');
        }
    });

    if (filter === 'all') {
        updateProjectDisplay(projects);
    } else {
        const filtered = projects.filter(project => project.tags.includes(filter));
        updateProjectDisplay(filtered);
    }
}


// Initialization
function initPortfolio() {
    updateProjectDisplay(projects);
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', () => filterProjects(button.getAttribute('data-filter')));
    });
}

// Intersect Observer for Animations
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = parseInt(entry.target.getAttribute('data-delay') || '0');
                setTimeout(() => {
                    entry.target.classList.remove('opacity-0', 'translate-y-5');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1
    });

    document.querySelectorAll('[data-animate]').forEach(element => {
        observer.observe(element);
    });
}

// Slideshow Functionality
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('opacity-100');
        slides[i].classList.add('opacity-0');
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].classList.remove('opacity-0');
    slides[slideIndex - 1].classList.add('opacity-100');
    setTimeout(showSlides, 8000);
}

// Dynamic Tagline Functionality
const taglines = [
    "I craft seamless UI/UX that drives business growth.",
    "Full-Stack solutions that are designed beautiful and built robust.",
    "Bridging the gap between beautiful design and flawless code.",
    "Designing digital products with e-commerce conversion in mind.",
    "From Figma wireframes to production-ready React components."
];
let taglineIndex = 0;

function cycleTaglines() {
    const taglineElement = document.getElementById('dynamic-tagline');
    if (taglineElement) {
        taglineElement.style.opacity = '0';
        setTimeout(() => {
            taglineElement.textContent = taglines[taglineIndex];
            taglineIndex = (taglineIndex + 1) % taglines.length;
            taglineElement.style.opacity = '1';
        }, 500);
        setTimeout(cycleTaglines, 6000);
    }
}

// Initialize on load
window.onload = function() {
    initPortfolio();
    initAnimations();
    showSlides();
    cycleTaglines();
};