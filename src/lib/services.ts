// Editable services data with estimated times and bundle prices
export type Service = {
  name: string
  description: string
  estimatedTime: string // e.g. "1-2 hours"
}

export type Bundle = {
  name: string
  description: string
  price: number // USD
  includedServices: string[]
}

export const winterServices: Service[] = [
  { name: "Residential Snow Plowing", description: "Driveway and walkway snow removal.", estimatedTime: "30-60 min" },
  { name: "Commercial Snow Plowing", description: "Parking lot and sidewalk clearing.", estimatedTime: "1-2 hours" },
  { name: "Driveway & Sidewalk Clearing", description: "Manual shoveling and snow blowing.", estimatedTime: "30-45 min" },
  { name: "Salting & De-icing Services", description: "Ice melt application for safety.", estimatedTime: "15-30 min" },
  { name: "Holiday Light Installation", description: "Setup and takedown of holiday lights.", estimatedTime: "1-2 hours" },
  { name: "Holiday Light Takedown", description: "Safe removal of lights after season.", estimatedTime: "1 hour" },
  { name: "Roof Snow Removal", description: "Clearing snow from rooftops.", estimatedTime: "1-2 hours" },
  { name: "Ice Dam Removal", description: "Prevent roof leaks and damage.", estimatedTime: "1-2 hours" },
  { name: "Snow Hauling & Relocation", description: "Move excess snow offsite.", estimatedTime: "1-2 hours" },
  { name: "24/7 Emergency Snow Service", description: "On-call snow removal anytime.", estimatedTime: "Varies" },
  { name: "Pre-Storm Anti-Icing", description: "Prevent ice before storms.", estimatedTime: "15-30 min" },
  { name: "Mailbox & Fire Hydrant Clearing", description: "Ensure access for mail and safety.", estimatedTime: "10-20 min" },
  { name: "Gutter Heater Installation", description: "Install heating cables to prevent ice.", estimatedTime: "2-3 hours" },
  { name: "Winter Tree Wrapping", description: "Protect trees from cold damage.", estimatedTime: "30-60 min" },
  { name: "Shrub & Bush Protection", description: "Cover and insulate delicate plants.", estimatedTime: "30-45 min" },
  { name: "Seasonal Debris Removal", description: "Remove fallen branches and debris.", estimatedTime: "30-60 min" },
  { name: "Storm Damage Cleanup", description: "Clear debris after winter storms.", estimatedTime: "1-2 hours" },
  { name: "Firewood Stacking", description: "Neat stacking of delivered firewood.", estimatedTime: "30-45 min" },
  { name: "Outdoor Furniture Winterizing", description: "Cover and store outdoor furniture.", estimatedTime: "30-60 min" },
  { name: "Snow Fence Installation", description: "Install snow fences to control drifts.", estimatedTime: "1-2 hours" },
]

export const springServices: Service[] = [
  { name: "Spring Yard Cleanup", description: "Remove leaves, sticks, and debris.", estimatedTime: "1-2 hours" },
  { name: "Mulch Installation & Delivery", description: "Fresh mulch for beds and trees.", estimatedTime: "1-2 hours" },
  { name: "Flower Bed Preparation", description: "Prep soil and beds for planting.", estimatedTime: "1 hour" },
  { name: "Weeding & Weed Control", description: "Remove and treat weeds.", estimatedTime: "30-60 min" },
  { name: "Lawn Aeration & Dethatching", description: "Improve soil and grass health.", estimatedTime: "1-2 hours" },
  { name: "Overseeding & Fertilization", description: "Boost lawn growth and color.", estimatedTime: "1 hour" },
  { name: "Garden Tilling & Prep", description: "Prepare gardens for planting.", estimatedTime: "1-2 hours" },
  { name: "Tree & Shrub Pruning", description: "Shape and maintain plants.", estimatedTime: "1-2 hours" },
  { name: "Gutter Cleaning", description: "Clear gutters for spring rains.", estimatedTime: "1 hour" },
  { name: "Power Washing (Patios & Decks)", description: "Clean outdoor surfaces.", estimatedTime: "1-2 hours" },
  { name: "Lawn Mower Blade Sharpening", description: "Sharpen blades for clean cuts.", estimatedTime: "30 min" },
  { name: "Sprinkler System Startup", description: "Get irrigation ready for season.", estimatedTime: "1 hour" },
  { name: "New Sod Installation", description: "Install fresh sod for instant lawn.", estimatedTime: "2-3 hours" },
  { name: "Planting Annuals & Perennials", description: "Add color to your beds.", estimatedTime: "1-2 hours" },
  { name: "Soil Testing & Amending", description: "Test and improve soil quality.", estimatedTime: "1 hour" },
  { name: "Landscape Edging Installation", description: "Install clean bed edges.", estimatedTime: "1-2 hours" },
  { name: "Drainage Solutions", description: "Fix wet spots and pooling.", estimatedTime: "2-3 hours" },
  { name: "Pond & Water Feature Opening", description: "Get water features running.", estimatedTime: "1-2 hours" },
  { name: "Outdoor Lighting Checkup", description: "Inspect and repair lighting.", estimatedTime: "30-60 min" },
  { name: "Swing Set & Playset Assembly", description: "Assemble outdoor play equipment.", estimatedTime: "2-3 hours" },
]

export const summerServices: Service[] = [
  { name: "Weekly Lawn Mowing", description: "Keep your lawn neat all summer.", estimatedTime: "30-60 min" },
  { name: "Bi-Weekly Lawn Mowing", description: "Flexible mowing schedule.", estimatedTime: "30-60 min" },
  { name: "Lawn Edging & Trimming", description: "Crisp edges and clean lines.", estimatedTime: "30-45 min" },
  { name: "Garden & Flower Bed Care", description: "Weed, water, and maintain beds.", estimatedTime: "1 hour" },
  { name: "Hedge & Shrub Trimming", description: "Shape and maintain hedges.", estimatedTime: "1 hour" },
  { name: "Fertilization Programs", description: "Keep grass green and healthy.", estimatedTime: "30 min" },
  { name: "Weed Control Applications", description: "Treat and prevent weeds.", estimatedTime: "30-45 min" },
  { name: "Pest & Grub Control", description: "Protect lawn from pests.", estimatedTime: "30-60 min" },
  { name: "Irrigation System Management", description: "Monitor and adjust watering.", estimatedTime: "30-60 min" },
  { name: "Top Dressing & Leveling", description: "Smooth and enrich lawn.", estimatedTime: "1-2 hours" },
  { name: "Tree Trimming & Pruning", description: "Maintain tree health and shape.", estimatedTime: "1-2 hours" },
  { name: "Stump Grinding", description: "Remove unsightly stumps.", estimatedTime: "1-2 hours" },
  { name: "Deck & Fence Staining", description: "Protect and beautify wood.", estimatedTime: "2-3 hours" },
  { name: "Patio & Walkway Maintenance", description: "Clean and repair hardscapes.", estimatedTime: "1-2 hours" },
  { name: "Outdoor Kitchen Cleaning", description: "Deep clean outdoor kitchens.", estimatedTime: "1 hour" },
  { name: "Pool Area Landscaping", description: "Beautify pool surroundings.", estimatedTime: "1-2 hours" },
  { name: "Vegetable Garden Maintenance", description: "Care for your veggie patch.", estimatedTime: "1 hour" },
  { name: "Compost Bin Setup", description: "Start composting at home.", estimatedTime: "30-60 min" },
  { name: "Rain Barrel Installation", description: "Eco-friendly water collection.", estimatedTime: "1 hour" },
  { name: "Landscape Lighting Maintenance", description: "Keep lights working all summer.", estimatedTime: "30-60 min" },
]

export const fallServices: Service[] = [
  { name: "Fall Yard Cleanup", description: "Remove leaves and prep for winter.", estimatedTime: "1-2 hours" },
  { name: "Leaf Raking & Removal", description: "Clear leaves from lawn and beds.", estimatedTime: "1-2 hours" },
  { name: "Gutter Cleaning & Inspection", description: "Prevent clogs before winter.", estimatedTime: "1 hour" },
  { name: "Seasonal Shutdown of Beds", description: "Prepare beds for cold weather.", estimatedTime: "1 hour" },
  { name: "Lawn Winterization", description: "Fertilize and prep grass for cold.", estimatedTime: "30-60 min" },
  { name: "Fall Aeration & Seeding", description: "Strengthen lawn for next year.", estimatedTime: "1-2 hours" },
  { name: "Final Lawn Mowing", description: "Last cut before winter.", estimatedTime: "30-45 min" },
  { name: "Tree & Shrub Fertilization", description: "Feed plants for winter.", estimatedTime: "30-60 min" },
  { name: "Sprinkler System Winterization", description: "Blow out and shut down system.", estimatedTime: "1 hour" },
  { name: "Perennial Cut-Backs", description: "Trim perennials for winter.", estimatedTime: "1 hour" },
  { name: "Planting Fall Bulbs", description: "Plant bulbs for spring blooms.", estimatedTime: "1 hour" },
  { name: "Firewood Delivery & Stacking", description: "Deliver and stack firewood.", estimatedTime: "30-60 min" },
  { name: "Storm Debris Cleanup", description: "Remove branches after storms.", estimatedTime: "1-2 hours" },
  { name: "Outdoor Furniture Storage", description: "Store furniture for winter.", estimatedTime: "30-60 min" },
  { name: "Pond & Water Feature Closing", description: "Shut down water features.", estimatedTime: "1 hour" },
  { name: "Hose & Spigot Winterizing", description: "Drain and store hoses.", estimatedTime: "30 min" },
  { name: "Tool & Equipment Sharpening", description: "Sharpen tools for next year.", estimatedTime: "30-60 min" },
  { name: "Soil pH Balancing", description: "Adjust soil for healthy plants.", estimatedTime: "30-60 min" },
  { name: "Cover Cropping for Gardens", description: "Plant cover crops for soil health.", estimatedTime: "1 hour" },
  { name: "Window Well Cleaning", description: "Clear debris from window wells.", estimatedTime: "30 min" },
]

export const bundles: Bundle[] = [
  {
    name: "Full Season Lawn Care Package",
    description: "Weekly mowing, edging, and fertilization for the whole season.",
    price: 799,
    includedServices: ["Weekly Lawn Mowing", "Lawn Edging & Trimming", "Fertilization Programs", "Weed Control Applications"]
  },
  {
    name: "Complete Snow & Ice Management",
    description: "All-inclusive snow removal and salting for winter.",
    price: 899,
    includedServices: ["Residential Snow Plowing", "Salting & De-icing Services", "Driveway & Sidewalk Clearing", "24/7 Emergency Snow Service"]
  },
  {
    name: "Spring & Fall Cleanup Combo",
    description: "Yard cleanup, mulching, and leaf removal for both seasons.",
    price: 499,
    includedServices: ["Spring Yard Cleanup", "Mulch Installation & Delivery", "Fall Yard Cleanup", "Leaf Raking & Removal"]
  },
  {
    name: "Garden Lover's Dream Package",
    description: "All garden and flower bed care for the year.",
    price: 599,
    includedServices: ["Flower Bed Preparation", "Planting Annuals & Perennials", "Garden & Flower Bed Care", "Weeding & Weed Control"]
  },
  {
    name: "Curb Appeal Enhancement",
    description: "Boost your home's curb appeal with a full refresh.",
    price: 699,
    includedServices: ["Landscape Edging Installation", "Mulch Installation & Delivery", "Power Washing (Patios & Decks)", "Outdoor Lighting Checkup"]
  },
  // ...add more bundles as needed
]
