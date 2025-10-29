// Global Data and Utility Functions
document.getElementById('current-year').textContent = new Date().getFullYear();
let currentProjectImages = [];
let currentImageIndex = 0;

// Portfolio projects data
const projects = [
    {
      id: 1,
        title: "Multi-Modal Voice UI Design: Voice Kitchen Assistant App",
        summary: "A hands-free voice-first UI for cooking, blending voice commands with visual cues to make kitchen tasks more accessible and efficient.",
        description: `
            <h1 class="text-3xl font-bold mb-4 text-accent border-b-2 border-accent pb-2">Multi-Modal Voice UI Design</h1>
            <p class="text-xl text-accent mb-6 font-semibold bg-secondary-dark p-2 rounded-lg inline-block">
                **Designed a voice-first interface achieving 95% Task Completion (tested October 25, 2025), enhancing cooking accessibility through multi-modal interaction.**
            </p>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">Designing the Future of Hands-Free Cooking</h3>
            <p class="text-gray-300 mb-4">How might we make cooking more convenient and accessible by designing a voice-first interface that guides users through recipes without requiring them to touch a screen?</p>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">The Problem</h3>
            <p class="text-gray-300 mb-4">"Reading a recipe on a phone or tablet while cooking is messy and inconvenient. Hands are dirty, screens get smudged, and constantly unlocking your device disrupts the cooking flow."</p>
            <h4 class="text-lg font-medium text-gray-400 mt-4 mb-2">Key Pain Points</h4>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>Touching screens with wet or dirty hands while cooking</li>
                <li>Constantly needing to unlock devices to see the next step</li>
                <li>Difficulty tracking multiple timers and techniques</li>
                <li>Breaking concentration to scroll through recipe details</li>
            </ul>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">My Role</h3>
            <p class="text-gray-300 mb-4">UX Designer & Voice UI Specialist</p>
            <p class="text-gray-300 mb-4">Solo project - End-to-end design from research to high-fidelity prototype</p>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>✓ User Research & Interviews</li>
                <li>✓ Conversational Design & Voice Scripts</li>
                <li>✓ Multi-Modal Interaction Design</li>
                <li>✓ Prototyping & Usability Testing</li>
            </ul>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">Discovery & Research</h3>
            <h4 class="text-lg font-medium text-gray-400 mt-4 mb-2">Understanding our users</h4>
            <p class="text-gray-300 mb-4">12 User Interviews, 3 Cooking Observations, 5 Competitor Analyses</p>
            <h4 class="text-lg font-medium text-gray-400 mt-4 mb-2">Key Research Insights</h4>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>"I hate having to wash my hands just to see the next step" - Sarah, Home Cook, 34</li>
                <li>"Sometimes I miss a timer and overcook things because my screen locked" - Michael, Amateur Chef, 28</li>
                <li>"I wish I could just ask questions while I'm cooking" - Jessica, Food Blogger, 31</li>
                <li>"Voice assistants don't understand cooking context well enough" - David, Professional Chef, 42</li>
            </ul>

            <h4 class="text-lg font-medium text-gray-400 mt-4 mb-2">User Persona: Meet Emma</h4>
            <p class="text-gray-300 mb-4">Emma is a 32-year-old marketing manager who loves cooking but finds it challenging to follow recipes while juggling multiple tasks in the kitchen.</p>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Goals</h5>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>Cook without touching devices</li>
                <li>Learn new techniques</li>
                <li>Keep kitchen clean</li>
            </ul>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Frustrations</h5>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>Smudged screens</li>
                <li>Missing timers</li>
                <li>Forgetting steps</li>
            </ul>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">Ideation & Wireframing</h3>
            <h4 class="text-lg font-medium text-gray-400 mt-4 mb-2">Exploring solutions</h4>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Design Principles</h5>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>Voice-First: Prioritize voice interaction with visual support, not the other way around</li>
                <li>Graceful Errors: Handle misunderstandings with helpful suggestions, never dead-end users</li>
                <li>Context-Aware: Understand cooking context and timing to provide proactive assistance</li>
            </ul>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Conversational Flow Design</h5>
            <p class="text-gray-300 mb-4">User: "Start"<br>Assistant: "Great! Let's begin. Step 1: Preheat oven..."</p>
            <p class="text-gray-300 mb-4">User: "Pause"<br>Assistant: "Okay, I'll pause. Say 'resume' when ready."</p>
            <p class="text-gray-300 mb-4">User: "Give me a tip"<br>Assistant: "Here's a tip: Make sure rack is in middle..."</p>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Multi-Modal Strategy</h5>
            <p class="text-gray-300 mb-4">Voice (Primary): Step instructions, confirmations, timer alerts</p>
            <p class="text-gray-300 mb-4">Screen (Supporting): Visual timers, progress tracking, technique videos, ingredient lists</p>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Key Design Decisions</h5>
            <ol class="list-decimal list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>Always-Visible Progress Bar: Users wanted to know how far along they were without asking. Added persistent progress indicator.</li>
                <li>Conversation History Log: Desktop users appreciated seeing past exchanges for reference and catching missed instructions.</li>
                <li>Natural Language Processing: Support variations like "next", "continue", "I'm done" - don't force rigid commands.</li>
                <li>Proactive Timer Announcements: Automatically set and announce timers for steps that require them - users shouldn't have to ask.</li>
            </ol>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">Visual Design & Prototyping</h3>
            <h4 class="text-lg font-medium text-gray-400 mt-4 mb-2">Bringing ideas to life</h4>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Design System</h5>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>Primary: Main actions</li>
                <li>Tips: Helpful info</li>
                <li>Techniques: How-to guides</li>
                <li>Errors: Clarifications</li>
            </ul>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Accessibility Considerations</h5>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>High contrast ratios for all text and UI elements</li>
                <li>Large, easy-to-see timers and progress indicators</li>
                <li>Voice-only operation - no screen interaction required</li>
                <li>Clear audio feedback for all actions</li>
            </ul>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Responsive Design</h5>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>Desktop: Full conversation history sidebar</li>
                <li>Tablet: Optimized for counter placement</li>
                <li>Mobile: Compact view with essential info</li>
                <li>Smart display: Kitchen-optimized 7-10" screen</li>
            </ul>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">Usability Testing & Iteration</h3>
            <h4 class="text-lg font-medium text-gray-400 mt-4 mb-2">Learning and improving</h4>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Testing Protocol</h5>
            <p class="text-gray-300 mb-4">8 Participants, 3 Recipes Tested, 45min Avg. Session</p>
            <p class="text-gray-300 mb-4">Participants were asked to cook a recipe using the voice assistant while we observed their interactions, noted pain points, and gathered feedback.</p>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Key Iterations Based on Testing</h5>
            <div class="space-y-4 mb-4">
                <div>
                    <p class="text-gray-300 mb-2"><strong>Before:</strong> Issue: Users forgot command options</p>
                    <p class="text-gray-300 mb-2">Testers would pause and ask "what can I say?" losing their flow.</p>
                    <p class="text-gray-300 italic">"I didn't know I could ask for tips until you told me"</p>
                    <p class="text-gray-300 mt-2"><strong>After:</strong> Solution: Added contextual command hints</p>
                    <p class="text-gray-300">Display relevant commands at the bottom of each step screen.</p>
                    <p class="text-gray-300">Say "Next" when done, "Repeat" to hear again, or "Tip" for advice</p>
                </div>
                <div>
                    <p class="text-gray-300 mb-2"><strong>Before:</strong> Issue: Timer alerts were too subtle</p>
                    <p class="text-gray-300 mb-2">Users missed timer completions while focused on other tasks.</p>
                    <p class="text-gray-300 italic">"I was chopping vegetables and didn't notice the timer went off"</p>
                    <p class="text-gray-300 mt-2"><strong>After:</strong> Solution: Multi-sensory timer alerts</p>
                    <p class="text-gray-300">Added voice announcement + visual pulsing + sound effect for timer completion.</p>
                    <p class="text-gray-300">"Your timer is complete! Ready for the next step?"</p>
                </div>
                <div>
                    <p class="text-gray-300 mb-2"><strong>Before:</strong> Issue: Error messages were frustrating</p>
                    <p class="text-gray-300 mb-2">Generic "I didn't understand" responses made users feel stuck.</p>
                    <p class="text-gray-300 italic">"It kept saying it didn't understand, but didn't tell me what TO say"</p>
                    <p class="text-gray-300 mt-2"><strong>After:</strong> Solution: Helpful error recovery</p>
                    <p class="text-gray-300">Provide specific examples of what the user can say in error messages.</p>
                    <p class="text-gray-300">"I didn't catch that. Try 'next step', 'pause', or 'give me a tip'"</p>
                </div>
            </div>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">Testing Results</h3>
            <div class="grid grid-cols-3 gap-4 text-center mb-6">
                <div class="bg-secondary-dark p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <p class="text-4xl font-bold text-accent">4.7/5</p>
                    <p class="text-sm text-gray-400">Ease of Use</p>
                </div>
                <div class="bg-secondary-dark p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <p class="text-4xl font-bold text-accent">95%</p>
                    <p class="text-sm text-gray-400">Task Completion</p>
                </div>
                <div class="bg-secondary-dark p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <p class="text-4xl font-bold text-accent">87%</p>
                    <p class="text-sm text-gray-400">Would Use Again</p>
                </div>
            </div>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">Final Solution & Reflection</h3>
            <h4 class="text-lg font-medium text-gray-400 mt-4 mb-2">The outcome</h4>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Core Features</h5>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>Natural Voice Commands: Start, pause, next, previous, repeat, tips - all work with natural language variations</li>
                <li>Smart Timer Management: Automatic timer setting with voice announcements and visual countdown</li>
                <li>Progress Tracking: Always visible progress bar showing completion percentage and current step</li>
                <li>Contextual Tips & Techniques: Proactive helpful suggestions and detailed technique explanations on demand</li>
                <li>Flexible Navigation: Move forward, backward, or repeat steps freely without rigid constraints</li>
                <li>Conversation History: Desktop view shows full conversation log for reference</li>
            </ul>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Impact & Learnings</h5>
            <p class="text-gray-300 mb-4">What I Learned</p>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>Voice-first doesn't mean voice-only: The screen plays a crucial supporting role for timers, progress, and visual reference</li>
                <li>Error handling is everything: How you handle misunderstandings defines the user experience more than perfect recognition</li>
                <li>Context awareness is key: Understanding where users are in their cooking journey enables proactive, helpful assistance</li>
                <li>Natural language is hard: Supporting conversational variations requires careful design and extensive testing</li>
            </ul>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">What I'd Do Differently Next Time</h5>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>Conduct more diverse testing with users of different cooking skill levels and dietary needs</li>
                <li>Explore integration with smart kitchen appliances (ovens, timers, scales)</li>
                <li>Add personalization features - learning user preferences and adapting over time</li>
                <li>Test with actual voice recognition technology to validate NLP assumptions</li>
            </ul>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Future Opportunities</h5>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>Ingredient substitution: "What can I use instead of butter?"</li>
                <li>Shopping list generation: "Add missing ingredients to my list"</li>
                <li>Skill-building mode: Detailed technique videos and coaching</li>
                <li>Multi-recipe coordination: Managing multiple dishes with different timings</li>
            </ul>
            <blockquote class="border-l-4 border-accent pl-4 italic text-gray-400 mt-4 p-3 bg-secondary-dark/50 rounded-lg">
                "This project taught me that designing for voice isn't about removing screens - it's about orchestrating multiple modalities to create a seamless, hands-free experience that feels natural and empowering."
                — Design Reflection
            </blockquote>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">Try the Interactive Prototype</h3>
            <a href="https://www.figma.com/proto/hKBT3GuyzhkW8ZruZPnQdH/Voice-UI-for-Smart-Kitchen?node-id=1-2&t=5sf9NGzmo5HYZiM8-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2" target="_blank" class="bg-accent text-primary-dark font-bold py-3 px-6 rounded-full hover:bg-emerald-600 transition duration-300 inline-block">Explore Prototype</a>
        `,
         tags: ["ui-ux", "voice-ui", "conversational-ai", "multi-modal-interaction", "smart-home"],
        github: "https://github.com/yourusername/voice-kitchen-assistant",
        live: "https://www.figma.com/proto/hKBT3GuyzhkW8ZruZPnQdH/Voice-UI-for-Smart-Kitchen?node-id=1-2&t=5sf9NGzmo5HYZiM8-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
        caseStudy: true,
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
            <h1 class="text-3xl font-bold mb-4 text-accent border-b-2 border-accent pb-2">Multiplayer Drawing Game</h1>
            <p class="text-xl text-accent mb-6 font-semibold bg-secondary-dark p-2 rounded-lg inline-block">
               Created an engaging Multiplayer Drawing Game, a browser-based application where users draw and guess words in real-time with others worldwide. Built with React for a dynamic frontend, it features a collaborative canvas, timed drawing challenges, and a scoring system to crown the winner. The backend, powered by Node.js and Express, uses Socket.IO for seamless real-time communication, while MongoDB with Mongoose stores user data and game sessions. Incorporated Fabric.js for interactive drawing tools and Axios for API handling, ensuring a smooth multiplayer experience. This project highlights expertise in real-time web development, socket programming, and interactive UI design, with potential for future expansions like custom word lists or themed events.
            </p>
            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">Key Features</h3>
            <ul class="list-disc list-inside mb-4">
                <li>Real-time drawing and guessing</li>
                <li>Collaborative canvas</li>
                <li>Timed drawing challenges</li>
                <li>Scoring system</li>
            </ul>
            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">Technologies Used</h3>
            <ul class="list-disc list-inside mb-4">
                <li>React</li>
                <li>Socket.IO</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>Fabric.js</li>
                <li>Axios</li>
            </ul>
        `,
        tags: ["web-dev", "React", "Socket.IO", "Node.js", "Express", "MongoDB", "Mongoose", "Fabric.js", "Axios"],
        github: "https://github.com/busa0019/Multiplayer-Drawing-Game",
        live: "https://multiplayer-drawing-game-5ej6.vercel.app/",
        caseStudy: true,
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
            <h1 class="text-3xl font-bold mb-4 text-accent border-b-2 border-accent pb-2">Case Study</h1>
            <p class="text-xl text-accent mb-6 font-semibold bg-secondary-dark p-2 rounded-lg inline-block">
                **Redesigned VaultBank, achieving a 42% increase in daily active users and a 4.8★ App Store rating (launched Q2 2024, evaluated October 25, 2025).**
            </p>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">Project Overview</h3>
            <p class="text-gray-300 mb-4">VaultBank is a next-generation mobile banking platform that goes beyond traditional banking by integrating AI-powered financial insights, environmental impact tracking, and holistic financial health scoring. My mission was to create a banking experience that's not just secure and convenient, but also intelligent and sustainable.</p>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">Role</h3>
            <p class="text-gray-300 mb-4">Lead Product Designer</p>
            <p class="text-gray-300 mb-4">Duration: 4 weeks</p>
            <p class="text-gray-300 mb-4">Platform: iOS & Android</p>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">The Challenge</h3>
            <p class="text-gray-300 mb-4">User research revealed three critical pain points:</p>
            <ol class="list-decimal list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li><strong>Complex Navigation:</strong> Users struggled to find basic features, with 68% reporting frustration during usability testing</li>
                <li><strong>Limited Visibility:</strong> Account information was buried behind multiple screens, requiring 4-5 taps to view balances</li>
                <li><strong>Outdated Design:</strong> The visual design felt dated compared to competitors, affecting brand perception among younger users</li>
            </ol>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">The Solution</h3>
            <p class="text-gray-300 mb-4">VaultBank was built around four core principles: intelligence, sustainability, clarity, and security. Every feature was designed to empower users with actionable insights while maintaining the highest standards of financial security.</p>
            <h4 class="text-lg font-medium text-gray-400 mt-4 mb-2">Key Features</h4>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li><strong>Dashboard First:</strong> All account information visible on the home screen with quick actions for common tasks</li>
                <li><strong>Quick Actions:</strong> One-tap access to transfers, bill payments, and card management from any screen</li>
                <li><strong>Enhanced Security:</strong> Biometric authentication and real-time fraud alerts without compromising ease of use</li>
                <li><strong>Smart Insights:</strong> Personalized spending analytics and savings recommendations powered by AI</li>
            </ul>
            <h4 class="text-lg font-medium text-gray-400 mt-4 mb-2">Additional Features</h4>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li><strong>Unified Balance View:</strong> See all account balances at a glance with the ability to hide sensitive information with one tap. Users can customize which accounts appear on the home screen.</li>
                <li><strong>Intelligent Transaction Categorization:</strong> Automatic categorization of expenses with machine learning, helping users understand spending patterns and identify savings opportunities.</li>
                <li><strong>Card Management Hub:</strong> View all credit and debit cards in one place, with quick access to lock/unlock, view PIN, and report fraud. Digital card details for online shopping.</li>
                <li><strong>Instant Transfers:</strong> Send money to anyone using Interac e-Transfer with saved payees and recurring transfers. Average transfer time reduced from 2 minutes to 15 seconds.</li>
            </ul>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">Design Process</h3>
            <ol class="list-decimal list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li><strong>Research & Discovery:</strong> Conducted 20 user interviews, competitive analysis, and reviewed 2 weeks of app analytics to understand user needs and pain points.</li>
                <li><strong>Ideation & Wireframing:</strong> Created low-fidelity wireframes for 3 different navigation structures and tested with users to validate information architecture.</li>
                <li><strong>Visual Design:</strong> Developed a modern design system aligned with brand guidelines while ensuring accessibility (WCAG 2.1 AA compliance).</li>
                <li><strong>Prototyping & Testing:</strong> Built high-fidelity prototypes and conducted 5 rounds of usability testing with iterative improvements based on feedback.</li>
                <li><strong>Development & Launch:</strong> Collaborated closely with engineering team using design tokens and component library to ensure pixel-perfect implementation.</li>
            </ol>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">Impact & Results</h3>
            <p class="text-gray-300 mb-4">The redesigned app launched in Q2 2024 and exceeded all success metrics within the first 3 months:</p>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-6">
                <div class="bg-secondary-dark p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <p class="text-4xl font-bold text-accent">42%</p>
                    <p class="text-sm text-gray-400">Increase in daily active users</p>
                </div>
                <div class="bg-secondary-dark p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <p class="text-4xl font-bold text-accent">4.8★</p>
                    <p class="text-sm text-gray-400">App Store rating (up from 3.2)</p>
                </div>
                <div class="bg-secondary-dark p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <p class="text-4xl font-bold text-accent">65%</p>
                    <p class="text-sm text-gray-400">Reduction in support calls</p>
                </div>
                <div class="bg-secondary-dark p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <p class="text-4xl font-bold text-accent">89%</p>
                    <p class="text-sm text-gray-400">User satisfaction score</p>
                </div>
            </div>
            <h4 class="text-lg font-medium text-gray-400 mt-4 mb-2">User Feedback</h4>
            <blockquote class="border-l-4 border-accent pl-4 italic text-gray-400 mt-4 p-3 bg-secondary-dark/50 rounded-lg">
                "Finally, a banking app that doesn't make me feel like I need a degree in finance. Everything is exactly where I expect it to be." - Sarah M., Toronto
            </blockquote>
            <h4 class="text-lg font-medium text-gray-400 mt-4 mb-2">Business Impact</h4>
            <p class="text-gray-300 mb-4">The redesign contributed to 280,000 new mobile-first account openings and a 34% increase in mobile transaction volume.</p>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">Key Learnings</h3>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li><strong>Security doesn't have to mean complexity:</strong> By implementing biometric authentication and smart defaults, we increased security while reducing the number of steps for common tasks.</li>
                <li><strong>Accessibility is good design for everyone:</strong> Features we added for accessibility (like high contrast mode and larger touch targets) were appreciated by all users, not just those with specific needs.</li>
                <li><strong>Iterate with real data:</strong> Our analytics integration allowed us to quickly identify and fix pain points post-launch, leading to 3 major updates in the first quarter.</li>
            </ul>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">What's Next</h3>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>AI-powered financial advisor chatbot for personalized recommendations</li>
                <li>Integration with popular budgeting apps and personal finance tools</li>
                <li>Enhanced investment dashboard with real-time market data</li>
                <li>Carbon footprint tracking for credit card purchases</li>
            </ul>
        `,
        tags: ["ui-ux","mobile-design", "ai-insights", "financial-tech", "sustainability"],
        github: "#",
        live: "#",
        caseStudy: true,
        images: [
            'images/Home.png',
            'images/Account.png',
            'images/Transfer.png',
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
            <h1 class="text-3xl font-bold mb-4 text-accent border-b-2 border-accent pb-2">UX Case Study: The Zero-Waste Grocery App</h1>
            <p class="text-xl text-accent mb-6 font-semibold bg-secondary-dark p-2 rounded-lg inline-block">
                **Developed a prototype achieving a 95% success rate and 82/100 SUS score (tested October 25, 2025), simplifying sustainable shopping for eco-conscious users.**
            </p>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">The Problem</h3>
            <p class="text-gray-300 mb-4">People want to reduce plastic waste and shop sustainably, but it’s often inconvenient, expensive, hard to find stores, and time-consuming.</p>
            <h4 class="text-lg font-medium text-gray-400 mt-4 mb-2">Key Statistics</h4>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>73% want to shop sustainably but find it too difficult</li>
                <li>Average household uses 1,500 plastic bags annually</li>
                <li>Only 9% of plastic is recycled globally</li>
            </ul>
            <h4 class="text-lg font-medium text-gray-400 mt-4 mb-2">User Pain Points</h4>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li><strong>Inconvenience:</strong> "I always forget to bring my jars and bags"</li>
                <li><strong>Cost:</strong> "Zero-waste products seem more expensive"</li>
                <li><strong>Discovery:</strong> "I don’t know where zero-waste stores are"</li>
                <li><strong>Time:</strong> "It takes too much time to shop this way"</li>
            </ul>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">The Opportunity</h3>
            <p class="text-gray-300 mb-4">Design an app that makes zero-waste shopping easier than traditional shopping, removing friction and creating a delightful, sustainable experience.</p>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">Role & Timeline</h3>
            <p class="text-gray-300 mb-4">UX Designer & Researcher</p>
            <p class="text-gray-300 mb-4">Timeline: 8 Weeks</p>
            <p class="text-gray-300 mb-4">Tools: Figma, Maze, FigJam</p>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">Discovery & Research</h3>
            <h4 class="text-lg font-medium text-gray-400 mt-4 mb-2">Understanding the Users</h4>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Research Methods</h5>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>User Interviews: Conducted 15 in-depth interviews with eco-conscious shoppers</li>
                <li>Competitive Analysis: Analyzed 8 existing sustainability apps and zero-waste stores</li>
                <li>Field Observation: Visited 5 zero-waste stores to observe shopping behaviors</li>
            </ul>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Research Artifacts and Affinity Mapping</h5>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Key Insights from User Interviews</h5>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li><strong>Planning is Key:</strong> "I need to know what containers to bring before I leave home" - Sarah, 32, Sustainability Advocate</li>
                <li><strong>Discovery Challenge:</strong> "I wish I could find all zero-waste stores near me in one place" - Marcus, 28, Urban Professional</li>
                <li><strong>Motivation Matters:</strong> "I’d love to see my impact - how much waste I’ve avoided" - Emma, 35, Mother of Two</li>
            </ul>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">Meet Our Primary Persona</h3>
            <h4 class="text-lg font-medium text-gray-400 mt-4 mb-2">Maya Chen - The Conscious Consumer</h4>
            <p class="text-gray-300 mb-4">Age: 29 | Location: Portland, OR | Occupation: Marketing Manager</p>
            <p class="text-gray-300 mb-4">Background: Maya is passionate about sustainability but finds it challenging to maintain zero-waste habits with her busy schedule. She’s tech-savvy and relies on apps to organize her life. She wants to make a positive environmental impact without sacrificing convenience.</p>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Goals</h5>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>Reduce household plastic waste</li>
                <li>Find convenient zero-waste options</li>
                <li>Save time on grocery shopping</li>
                <li>Stay within budget</li>
            </ul>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Frustrations</h5>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>Forgetting reusable containers at home</li>
                <li>Limited zero-waste store locations</li>
                <li>Unclear pricing and product availability</li>
                <li>Extra time required for planning</li>
            </ul>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">"How Might We" Statement</h5>
            <p class="text-gray-300 mb-4">How might we help busy, eco-conscious consumers like Maya make zero-waste shopping as convenient as ordering from Amazon?</p>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">Ideation & Wireframing</h3>
            <h4 class="text-lg font-medium text-gray-400 mt-4 mb-2">Exploring Solutions</h4>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Key Features Identified</h5>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li><strong>Smart Store Finder:</strong> Discover nearby zero-waste stores with real-time inventory</li>
                <li><strong>Container-Based Lists:</strong> Create shopping lists with container type recommendations</li>
                <li><strong>Pre-Order System:</strong> Reserve items so stores prep your containers in advance</li>
                <li><strong>Impact Dashboard:</strong> Track waste saved and earn rewards for sustainable choices</li>
            </ul>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">User Flow Mapping</h5>
            <ol class="list-decimal list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>Discover Stores</li>
                <li>Create Shopping List</li>
                <li>Select Containers</li>
                <li>Pre-Order (Optional)</li>
                <li>Shop & Track Impact</li>
            </ol>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Design Principles</h5>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>Convenience First: Easier than regular shopping</li>
                <li>Visual Guidance: Clear container recommendations</li>
                <li>Positive Reinforcement: Celebrate sustainability wins</li>
            </ul>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Initial Wireframes</h5>
            <p class="text-gray-300 mb-4">Home Screen, Store Finder, Shopping List, Pre-Order (Low-fidelity wireframes exploring core navigation and feature hierarchy)</p>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">Visual Design & Prototyping</h3>
            <h4 class="text-lg font-medium text-gray-400 mt-4 mb-2">Bringing the Concept to Life</h4>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Color Palette</h5>
            <p class="text-gray-300 mb-4">Natural greens evoke sustainability; blues build trust</p>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Typography</h5>
            <p class="text-gray-300 mb-4">Inter Bold, Inter Regular - Clean, modern, accessible</p>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Iconography</h5>
            <p class="text-gray-300 mb-4">Friendly, recognizable icons for quick comprehension</p>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Key App Screens</h5>
            <p class="text-gray-300 mb-4">Interactive Prototype: The full prototype includes micro-interactions, smooth transitions, and haptic feedback to create a delightful user experience.</p>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Design Decisions</h5>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>Large touch targets for easy one-handed use</li>
                <li>Visual container guides eliminate guesswork</li>
                <li>Progress indicators motivate continued use</li>
                <li>Pre-order notifications reduce no-shows</li>
            </ul>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Accessibility Features</h5>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>WCAG AA contrast ratios throughout</li>
                <li>Screen reader optimized labels</li>
                <li>Font scaling support up to 200%</li>
                <li>Alternative text for all images</li>
            </ul>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">Usability Testing & Iteration</h3>
            <h4 class="text-lg font-medium text-gray-400 mt-4 mb-2">Validating Design Decisions</h4>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Testing Protocol</h5>
            <ol class="list-decimal list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>Moderated Sessions: 8 participants, 45-minute sessions</li>
                <li>Task-Based Scenarios: Find a store, create a list, pre-order items</li>
                <li>Think-Aloud Method: Users verbalized thoughts while navigating</li>
                <li>Post-Task Survey: SUS score and satisfaction ratings</li>
            </ol>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Key Findings</h5>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>Success Rate: 95%</li>
                <li>SUS Score: 82/100</li>
            </ul>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Confusion Point & Feature Request</h5>
            <p class="text-gray-300 mb-4">(Details to be added based on testing feedback)</p>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">User Testimonials</h5>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>"This is exactly what I’ve been looking for! The container recommendations take all the guesswork out." - Test Participant #3</li>
                <li>"The pre-order feature is genius. I hate waiting around in stores, so knowing everything is ready is perfect." - Test Participant #7</li>
            </ul>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Iteration: Before & After</h5>
            <p class="text-gray-300 mb-4"><strong>Before Testing:</strong> Shopping List Item - Almonds - 200g, Container: Jar (Issue: Users didn’t know what size jar to bring)</p>
            <p class="text-gray-300 mb-4"><strong>After Testing:</strong> Shopping List Item - Almonds - 200g, Glass jar 500ml minimum (✓ Clear visual + specific size eliminates confusion)</p>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">The Final Solution</h3>
            <p class="text-gray-300 mb-4">A comprehensive ecosystem for zero-waste grocery shopping</p>
            <h4 class="text-lg font-medium text-gray-400 mt-4 mb-2">Core Features</h4>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li><strong>Smart Store Finder:</strong> Discover nearby zero-waste stores with real-time inventory, hours, and distance calculations</li>
                <li><strong>Container-Based Lists:</strong> Create shopping lists with visual container guides and size recommendations</li>
                <li><strong>Pre-Order System:</strong> Reserve items so stores prep your containers in advance, reducing wait time</li>
                <li><strong>Impact Dashboard:</strong> Track waste saved, earn rewards, and celebrate sustainability milestones</li>
            </ul>
            <h4 class="text-lg font-medium text-gray-400 mt-4 mb-2">Business Model</h4>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li><strong>B2B Store Partnership Program:</strong> Monthly subscription for stores to list + analytics</li>
                <li><strong>B2C Premium Features:</strong> Advanced planning tools, unlimited pre-orders</li>
                <li><strong>AFF Sustainable Product Marketplace:</strong> Commission on reusable containers & eco-products</li>
            </ul>
            <h4 class="text-lg font-medium text-gray-400 mt-4 mb-2">Success Metrics</h4>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-6">
                <div class="bg-secondary-dark p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <p class="text-4xl font-bold text-accent">85%</p>
                    <p class="text-sm text-gray-400">User retention rate</p>
                </div>
                <div class="bg-secondary-dark p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <p class="text-4xl font-bold text-accent">3.2x</p>
                    <p class="text-sm text-gray-400">Increase in store visits</p>
                </div>
                <div class="bg-secondary-dark p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <p class="text-4xl font-bold text-accent">47%</p>
                    <p class="text-sm text-gray-400">Pre-order adoption</p>
                </div>
                <div class="bg-secondary-dark p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <p class="text-4xl font-bold text-accent">4.7★</p>
                    <p class="text-sm text-gray-400">App store rating</p>
                </div>
            </div>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">Reflection & Learnings</h3>
            <h4 class="text-lg font-medium text-gray-400 mt-4 mb-2">What I Learned</h4>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>Users need visual guidance: Abstract concepts like 'bring a container' don’t work. Showing specific container types with sizes made the difference.</li>
                <li>Positive reinforcement drives behavior: The impact dashboard wasn’t originally planned, but research showed users needed to see their progress to stay motivated.</li>
                <li>Convenience beats ideology: People want to be sustainable, but only if it’s easier than the alternative. Pre-ordering was crucial to adoption.</li>
                <li>Business model matters from day one: Understanding how stores benefit was essential. This isn’t just a consumer app—it’s a two-sided marketplace.</li>
            </ul>
            <h4 class="text-lg font-medium text-gray-400 mt-4 mb-2">What I’d Do Differently</h4>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>Test with store owners earlier: I focused heavily on consumer research but should have validated the store partnership model sooner.</li>
                <li>Include accessibility testing: While I designed for accessibility, I didn’t test with users who have disabilities. This should be core, not an afterthought.</li>
                <li>Prototype the rewards system: The gamification elements were added late. Testing different reward mechanisms earlier could have strengthened engagement.</li>
                <li>Consider international scaling: Zero-waste shopping looks different globally. Designing for localization from the start would have been valuable.</li>
            </ul>
            <h4 class="text-lg font-medium text-gray-400 mt-4 mb-2">Project Impact</h4>
            <p class="text-gray-300 mb-4">This project taught me that great UX isn’t just about beautiful interfaces—it’s about understanding human behavior, removing friction, and aligning user needs with business goals. Design that drives real change requires empathy, iteration, and a willingness to challenge assumptions.</p>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">Making Sustainability Accessible</h3>
            <p class="text-gray-300 mb-4">By removing barriers and celebrating progress, we’re helping people make sustainable choices effortlessly.</p>
        `,
        tags: ["ui-ux", "ux-design", "sustainability", "mobile-app", "research"],
        github: "#",
        live: "#",
        caseStudy: true,
        images: [
            'images/grocery-1.png',
            'images/grocery-2.png',
            'images/grocery-3.png',
            'images/grocery-4.png',
           
        ],
        thumbnail: 'images/heroSection.png'
    },

        {
       id: 5,
        title: "Wanderlust: Travel Booking Platform",
        summary: "Wanderlust is a travel booking platform that helps users discover, plan, and book their dream vacations. The platform focuses on creating an inspiring, visually-driven experience while maintaining simplicity in the booking flow.",
        description: `
            <h1 class="text-3xl font-bold mb-4 text-accent border-b-2 border-accent pb-2">UX Case Study: Travel Booking Platform</h1>
            <p class="text-xl text-accent mb-6 font-semibold bg-secondary-dark p-2 rounded-lg inline-block">
                 Goal: To create an intuitive, visually compelling platform that inspires users to explore destinations while streamlining the booking process.
            </p>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">The Problem</h3>
            <p class="text-gray-300 mb-4">Traditional travel booking platforms often suffer from:</p>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>Overwhelming interfaces with too many options upfront</li>
                <li>Generic destination presentations that fail to inspire</li>
                <li>Complex multi-step booking flows that cause abandonment</li>
                <li>Poor mobile experiences despite increasing mobile usage</li>
            </ul>
            <h4 class="text-lg font-medium text-gray-400 mt-4 mb-2">User Pain Points</h4>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li><strong>Inconvenience:</strong> "I always forget to bring my jars and bags"</li>
                <li><strong>Cost:</strong> "Zero-waste products seem more expensive"</li>
                <li><strong>Discovery:</strong> "I don’t know where zero-waste stores are"</li>
                <li><strong>Time:</strong> "It takes too much time to shop this way"</li>
            </ul>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">The Opportunity</h3>
            <p class="text-gray-300 mb-4">Design an app that makes zero-waste shopping easier than traditional shopping, removing friction and creating a delightful, sustainable experience.</p>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">Role & Timeline</h3>
            <p class="text-gray-300 mb-4">UX Designer & Researcher</p>
            <p class="text-gray-300 mb-4">Timeline: 8 Weeks</p>
            <p class="text-gray-300 mb-4">Tools: Figma, Maze, FigJam</p>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">Discovery & Research</h3>
            <h4 class="text-lg font-medium text-gray-400 mt-4 mb-2">Understanding the Users</h4>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Research Methods</h5>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>User Interviews: Conducted 15 in-depth interviews with eco-conscious shoppers</li>
                <li>Competitive Analysis: Analyzed 8 existing sustainability apps and zero-waste stores</li>
                <li>Field Observation: Visited 5 zero-waste stores to observe shopping behaviors</li>
            </ul>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Research Artifacts and Affinity Mapping</h5>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Key Insights from User Interviews</h5>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li><strong>Planning is Key:</strong> "I need to know what containers to bring before I leave home" - Sarah, 32, Sustainability Advocate</li>
                <li><strong>Discovery Challenge:</strong> "I wish I could find all zero-waste stores near me in one place" - Marcus, 28, Urban Professional</li>
                <li><strong>Motivation Matters:</strong> "I’d love to see my impact - how much waste I’ve avoided" - Emma, 35, Mother of Two</li>
            </ul>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">Meet Our Primary Persona</h3>
            <h4 class="text-lg font-medium text-gray-400 mt-4 mb-2">Maya Chen - The Conscious Consumer</h4>
            <p class="text-gray-300 mb-4">Age: 29 | Location: Portland, OR | Occupation: Marketing Manager</p>
            <p class="text-gray-300 mb-4">Background: Maya is passionate about sustainability but finds it challenging to maintain zero-waste habits with her busy schedule. She’s tech-savvy and relies on apps to organize her life. She wants to make a positive environmental impact without sacrificing convenience.</p>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Goals</h5>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>Reduce household plastic waste</li>
                <li>Find convenient zero-waste options</li>
                <li>Save time on grocery shopping</li>
                <li>Stay within budget</li>
            </ul>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Frustrations</h5>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>Forgetting reusable containers at home</li>
                <li>Limited zero-waste store locations</li>
                <li>Unclear pricing and product availability</li>
                <li>Extra time required for planning</li>
            </ul>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">"How Might We" Statement</h5>
            <p class="text-gray-300 mb-4">How might we help busy, eco-conscious consumers like Maya make zero-waste shopping as convenient as ordering from Amazon?</p>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">Ideation & Wireframing</h3>
            <h4 class="text-lg font-medium text-gray-400 mt-4 mb-2">Exploring Solutions</h4>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Key Features Identified</h5>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li><strong>Smart Store Finder:</strong> Discover nearby zero-waste stores with real-time inventory</li>
                <li><strong>Container-Based Lists:</strong> Create shopping lists with container type recommendations</li>
                <li><strong>Pre-Order System:</strong> Reserve items so stores prep your containers in advance</li>
                <li><strong>Impact Dashboard:</strong> Track waste saved and earn rewards for sustainable choices</li>
            </ul>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">User Flow Mapping</h5>
            <ol class="list-decimal list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>Discover Stores</li>
                <li>Create Shopping List</li>
                <li>Select Containers</li>
                <li>Pre-Order (Optional)</li>
                <li>Shop & Track Impact</li>
            </ol>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Design Principles</h5>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>Convenience First: Easier than regular shopping</li>
                <li>Visual Guidance: Clear container recommendations</li>
                <li>Positive Reinforcement: Celebrate sustainability wins</li>
            </ul>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Initial Wireframes</h5>
            <p class="text-gray-300 mb-4">Home Screen, Store Finder, Shopping List, Pre-Order (Low-fidelity wireframes exploring core navigation and feature hierarchy)</p>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">Visual Design & Prototyping</h3>
            <h4 class="text-lg font-medium text-gray-400 mt-4 mb-2">Bringing the Concept to Life</h4>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Color Palette</h5>
            <p class="text-gray-300 mb-4">Natural greens evoke sustainability; blues build trust</p>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Typography</h5>
            <p class="text-gray-300 mb-4">Inter Bold, Inter Regular - Clean, modern, accessible</p>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Iconography</h5>
            <p class="text-gray-300 mb-4">Friendly, recognizable icons for quick comprehension</p>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Key App Screens</h5>
            <p class="text-gray-300 mb-4">Interactive Prototype: The full prototype includes micro-interactions, smooth transitions, and haptic feedback to create a delightful user experience.</p>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Design Decisions</h5>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>Large touch targets for easy one-handed use</li>
                <li>Visual container guides eliminate guesswork</li>
                <li>Progress indicators motivate continued use</li>
                <li>Pre-order notifications reduce no-shows</li>
            </ul>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Accessibility Features</h5>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>WCAG AA contrast ratios throughout</li>
                <li>Screen reader optimized labels</li>
                <li>Font scaling support up to 200%</li>
                <li>Alternative text for all images</li>
            </ul>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">Usability Testing & Iteration</h3>
            <h4 class="text-lg font-medium text-gray-400 mt-4 mb-2">Validating Design Decisions</h4>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Testing Protocol</h5>
            <ol class="list-decimal list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>Moderated Sessions: 8 participants, 45-minute sessions</li>
                <li>Task-Based Scenarios: Find a store, create a list, pre-order items</li>
                <li>Think-Aloud Method: Users verbalized thoughts while navigating</li>
                <li>Post-Task Survey: SUS score and satisfaction ratings</li>
            </ol>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Key Findings</h5>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>Success Rate: 95%</li>
                <li>SUS Score: 82/100</li>
            </ul>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Confusion Point & Feature Request</h5>
            <p class="text-gray-300 mb-4">(Details to be added based on testing feedback)</p>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">User Testimonials</h5>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>"This is exactly what I’ve been looking for! The container recommendations take all the guesswork out." - Test Participant #3</li>
                <li>"The pre-order feature is genius. I hate waiting around in stores, so knowing everything is ready is perfect." - Test Participant #7</li>
            </ul>
            <h5 class="text-md font-medium text-gray-400 mt-2 mb-2">Iteration: Before & After</h5>
            <p class="text-gray-300 mb-4"><strong>Before Testing:</strong> Shopping List Item - Almonds - 200g, Container: Jar (Issue: Users didn’t know what size jar to bring)</p>
            <p class="text-gray-300 mb-4"><strong>After Testing:</strong> Shopping List Item - Almonds - 200g, Glass jar 500ml minimum (✓ Clear visual + specific size eliminates confusion)</p>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">The Final Solution</h3>
            <p class="text-gray-300 mb-4">A comprehensive ecosystem for zero-waste grocery shopping</p>
            <h4 class="text-lg font-medium text-gray-400 mt-4 mb-2">Core Features</h4>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li><strong>Smart Store Finder:</strong> Discover nearby zero-waste stores with real-time inventory, hours, and distance calculations</li>
                <li><strong>Container-Based Lists:</strong> Create shopping lists with visual container guides and size recommendations</li>
                <li><strong>Pre-Order System:</strong> Reserve items so stores prep your containers in advance, reducing wait time</li>
                <li><strong>Impact Dashboard:</strong> Track waste saved, earn rewards, and celebrate sustainability milestones</li>
            </ul>
            <h4 class="text-lg font-medium text-gray-400 mt-4 mb-2">Business Model</h4>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li><strong>B2B Store Partnership Program:</strong> Monthly subscription for stores to list + analytics</li>
                <li><strong>B2C Premium Features:</strong> Advanced planning tools, unlimited pre-orders</li>
                <li><strong>AFF Sustainable Product Marketplace:</strong> Commission on reusable containers & eco-products</li>
            </ul>
            <h4 class="text-lg font-medium text-gray-400 mt-4 mb-2">Success Metrics</h4>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-6">
                <div class="bg-secondary-dark p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <p class="text-4xl font-bold text-accent">85%</p>
                    <p class="text-sm text-gray-400">User retention rate</p>
                </div>
                <div class="bg-secondary-dark p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <p class="text-4xl font-bold text-accent">3.2x</p>
                    <p class="text-sm text-gray-400">Increase in store visits</p>
                </div>
                <div class="bg-secondary-dark p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <p class="text-4xl font-bold text-accent">47%</p>
                    <p class="text-sm text-gray-400">Pre-order adoption</p>
                </div>
                <div class="bg-secondary-dark p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <p class="text-4xl font-bold text-accent">4.7★</p>
                    <p class="text-sm text-gray-400">App store rating</p>
                </div>
            </div>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">Reflection & Learnings</h3>
            <h4 class="text-lg font-medium text-gray-400 mt-4 mb-2">What I Learned</h4>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>Users need visual guidance: Abstract concepts like 'bring a container' don’t work. Showing specific container types with sizes made the difference.</li>
                <li>Positive reinforcement drives behavior: The impact dashboard wasn’t originally planned, but research showed users needed to see their progress to stay motivated.</li>
                <li>Convenience beats ideology: People want to be sustainable, but only if it’s easier than the alternative. Pre-ordering was crucial to adoption.</li>
                <li>Business model matters from day one: Understanding how stores benefit was essential. This isn’t just a consumer app—it’s a two-sided marketplace.</li>
            </ul>
            <h4 class="text-lg font-medium text-gray-400 mt-4 mb-2">What I’d Do Differently</h4>
            <ul class="list-disc list-inside text-gray-300 space-y-2 pl-5 mb-4">
                <li>Test with store owners earlier: I focused heavily on consumer research but should have validated the store partnership model sooner.</li>
                <li>Include accessibility testing: While I designed for accessibility, I didn’t test with users who have disabilities. This should be core, not an afterthought.</li>
                <li>Prototype the rewards system: The gamification elements were added late. Testing different reward mechanisms earlier could have strengthened engagement.</li>
                <li>Consider international scaling: Zero-waste shopping looks different globally. Designing for localization from the start would have been valuable.</li>
            </ul>
            <h4 class="text-lg font-medium text-gray-400 mt-4 mb-2">Project Impact</h4>
            <p class="text-gray-300 mb-4">This project taught me that great UX isn’t just about beautiful interfaces—it’s about understanding human behavior, removing friction, and aligning user needs with business goals. Design that drives real change requires empathy, iteration, and a willingness to challenge assumptions.</p>

            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">Making Sustainability Accessible</h3>
            <p class="text-gray-300 mb-4">By removing barriers and celebrating progress, we’re helping people make sustainable choices effortlessly.</p>
        `,
        tags: ["ui-ux", "ux-design", "sustainability", "mobile-app", "research"],
        github: "#",
        live: "#",
        caseStudy: true,
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
            <h1 class="text-3xl font-bold mb-4 text-accent border-b-2 border-accent pb-2">Branding Case Study: Business Card Design</h1>
            <p class="text-xl text-accent mb-6 font-semibold bg-secondary-dark p-2 rounded-lg inline-block">
                 Goal: To create a memorable and professional business card that effectively represents the brand identity.
            </p>
            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">Design Variations</h3>
            <p class="text-gray-300 mb-4">Explored different layouts, color schemes, and typography to find the best fit for the brand.</p>
            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">Final Design</h3>
            <p class="text-gray-300 mb-4">The final design features a clean layout with a bold logo and a cohesive color palette.</p>
            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">Print & Material Choices</h3>
            <p class="text-gray-300 mb-4">Selected high-quality cardstock with a matte finish to enhance the tactile experience.</p>
            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">Feedback & Iteration</h3>
            <p class="text-gray-300 mb-4">Incorporated client feedback to refine the design, ensuring it met all branding requirements.</p>
        `,
        tags: ["branding", "graphic-design", "identity", "merchandise"],
        github: "#",
        live: "#",
        caseStudy: true,
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
        summary: "CineVerse is a modern movie discovery app with real-time search, genre filtering,favorites and trailer playback built with React and The Movie Database (TMDb) API.",
        description: `
            <h1 class="text-3xl font-bold mb-4 text-accent border-b-2 border-accent pb-2">CineVerse — Movie App</h1>
            <p class="text-xl text-accent mb-6 font-semibold bg-secondary-dark p-2 rounded-lg inline-block">
                CineVerse is a modern movie discovery app built with React, React Router, and the TMDB API. It lets users browse Trending, Popular, Top Rated, and Now Playing titles, filter by genre, search by keyword, and view rich movie details including cast, director, ratings, runtime, and synopsis. The experience includes trailer playback (YouTube), “Load More” pagination for each section, and favorites management saved to localStorage (gated behind a simple login). The UI features a responsive, mobile-first layout, skeleton placeholders while loading, and clean card-based grids. Routing uses a hash strategy for GitHub Pages compatibility, and the project is production-ready with an optimized build and deploy workflows for GitHub Pages and Vercel.
              tags: ["React", "TMDB", "API", "Frontend"],
            </p>
            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">Key Features</h3>
            <ul class="list-disc list-inside mb-4">
                <li>Real-time search and filtering</li>
                <li>Favorites management</li>
                <li>Trailer playback</li>
                <li>Responsive design</li>
            </ul>
            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-200 border-b border-gray-700 pb-2">Technologies Used</h3>
            <ul class="list-disc list-inside mb-4">
                <li>React</li>
                <li>React Router</li>
                <li>TMDB API</li>
            </ul>
        `,
        tags: ["web-dev", "React", "TMDB", "API", "Frontend"],
        github: "https://github.com/busa0019/Movie-App",
        live: "https://movie-app-gamma-peach.vercel.app/",
        caseStudy: true,
        images: [
            'images/movie-1.png',
            'images/movie-2.png',
            'images/movie-3.png',
            'images/movie-4.png',
            'images/movie-5.png'
        ],
        thumbnail: 'images/movie-app.png'
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

    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-description').innerHTML = project.description;
    
    document.getElementById('modal-github').href = project.github;
    document.getElementById('modal-live').href = project.live;
    document.getElementById('modal-case-study').classList.toggle('hidden', !project.caseStudy);
    if (project.caseStudy) {
        document.getElementById('modal-case-study').href = "#";
    }

    const tagsContainer = document.getElementById('modal-tags');
    tagsContainer.innerHTML = project.tags.map(tag => 
        `<span class="bg-gray-700 text-accent px-3 py-1 rounded-full text-xs font-medium">${tag}</span>`
    ).join('');

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