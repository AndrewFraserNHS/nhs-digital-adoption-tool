// Shared constants and data for NHS Digital Adoption tools
window.NHSDigitalAdoption = window.NHSDigitalAdoption || {};
NHSDigitalAdoption.CONSTANTS = (function(){
    const LENSES = [
        "Strategic Direction and Leadership",
        "People Experience and Culture",
        "Planning and Risk",
        "Skills and Behaviour",
        "Process and Sustainment"
    ];

    const COMPONENTS = [
        { id: "vision", label: "Vision", lenses: [LENSES[0], LENSES[1]], phase: 1, target: 5 },
        { id: "case_for_change", label: "Case for Change", lenses: [LENSES[0], LENSES[1]], phase: 1, target: 5 },
        { id: "sponsorship", label: "Senior Sponsorship & Governance", lenses: [LENSES[0], LENSES[1], LENSES[2]], phase: 2, target: 4 },
        { id: "change_network", label: "Change Network", lenses: [LENSES[0], LENSES[1]], phase: 2, target: 4 },
        { id: "benefits", label: "Benefits", lenses: [LENSES[4], LENSES[2]], phase: 2, target: 3 },
        { id: "change_impact", label: "Change Impact", lenses: [LENSES[1], LENSES[2]], phase: 2, target: 4 },
        { id: "risk_management", label: "Risk Management", lenses: [LENSES[2], LENSES[4]], phase: 3, target: 5 },
        { id: "cm_readiness", label: "CM Readiness & Planning", lenses: [LENSES[0], LENSES[2]], phase: 3, target: 4 },
        { id: "stakeholder", label: "Stakeholder Engagement & Comms", lenses: [LENSES[0], LENSES[1]], phase: 3, target: 5 },
        { id: "resistance", label: "Resistance Management", lenses: [LENSES[1], LENSES[3]], phase: 3, target: 4 },
        { id: "skills_learning", label: "Skills/ Learning", lenses: [LENSES[1], LENSES[3]], phase: 3, target: 4 },
        { id: "capability", label: "Capability & Confidence", lenses: [LENSES[1], LENSES[3]], phase: 4, target: 4 },
        { id: "change_adoption", label: "Change Adoption", lenses: [LENSES[4], LENSES[3], LENSES[2]], phase: 4, target: 2 },
        { id: "process_change", label: "Process Change", lenses: [LENSES[4], LENSES[3]], phase: 4, target: 5 },
        { id: "reinforcement", label: "Reinforcement", lenses: [LENSES[1], LENSES[4]], phase: 5, target: 2 },
        { id: "org_maturity", label: "Org Change Readiness", lenses: [LENSES[0], LENSES[3]], phase: 5, target: 4 },
        { id: "transfer_bau", label: "Transfer to BAU", lenses: [LENSES[0], LENSES[4]], phase: 5, target: 4 }
    ];

    const RUBRIC = {
        0: "Not Started",
        1: "Emerging",
        2: "Developing",
        3: "Embedding",
        4: "Adopted",
        5: "Thriving"
    };

    const INITIAL_ORG_PROFILE = { trustName: "", projectName: "", leadName: "" };

    // Specific rubrics map: componentId -> lens -> score -> text
    const SPECIFIC_RUBRICS = {
        vision: {
            "Strategic Direction and Leadership": {
                1: "Senior leaders take initial steps to develop the vision through workshops and discussions.",
                2: "A draft vision has been created and is being tested and refined with a wider group.",
                3: "A clear vision is defined and agreed at senior level but not yet consistently communicated.",
                4: "Senior leaders consistently communicate the vision and link it to organisational goals.",
                5: "Leaders speak with one voice about the vision and reinforce it through actions and decisions."
            },
            "People Experience and Culture": {
                1: "Early conversations focus on what is changing but staff involvement is limited.",
                2: "The draft vision is tested with a wider audience and refined using feedback.",
                3: "Some staff groups understand the vision but understanding varies across groups.",
                4: "Vision defined and communicated to all stakeholder groups with feedback loops in place.",
                5: "The vision is well understood across the organisation and embedded in behaviours."
            }
        },
        // Other components: include representative entries and leave placeholders to be completed
        case_for_change: {
            "Strategic Direction and Leadership": {
                5: "There is a clearly defined case for change which has been communicated to all stakeholder groups."
            }
        },
        sponsorship: {
            "Strategic Direction and Leadership": {
                5: "Leadership ownership of the change is fully established and sustained."
            }
        }
        // NOTE: The original HTML files contain an extensive SPECIFIC_RUBRICS object;
        // continue migrating remaining detailed rubric texts here as needed.
    };

    return { LENSES, COMPONENTS, RUBRIC, INITIAL_ORG_PROFILE };
})();
