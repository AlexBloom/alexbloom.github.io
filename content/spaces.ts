export type Space = {
  id: string; shortTitle: string; title: string; year?: string; description: string; hidden?: boolean;
  images: { src: string; original: string; width: number; height: number; caption: string; alt: string; group?: string }[];
  relatedProject?: { href: string; label: string };
  story?: { title: string; text: string }[];
  filmLinks?: { label: string; url: string; credit: string }[];
  credits?: { name: string; role: string; url?: string }[];
  videos?: { src: string; poster: string; caption: string; afterImage?: string }[];
};

export const spaces: Space[] = [
  {
    "id": "galley-kitchen",
    "shortTitle": "Pantry Remodel",
    "title": "Pantry Remodel",
    "description": "Custom oak cabinetry, stone counters, and open shelving built around an arched pass-through.",
    "images": [
      {
        "src": "/img/spaces/gallery/galley-kitchen/photo-6.webp",
        "original": "/img/spaces/gallery/galley-kitchen/photo-6.webp",
        "width": 960,
        "height": 1280,
        "caption": "The kitchen in use",
        "alt": "Finished galley kitchen with oak cabinetry, open shelves, and warm overhead lighting"
      },
      {
        "src": "/img/spaces/gallery/galley-kitchen/photo-1.webp",
        "original": "/img/spaces/gallery/galley-kitchen/photo-1.webp",
        "width": 960,
        "height": 1280,
        "caption": "Building the base cabinets",
        "alt": "Plywood base cabinet boxes with drawer slides in the galley kitchen"
      },
      {
        "src": "/img/spaces/gallery/galley-kitchen/photo-2.webp",
        "original": "/img/spaces/gallery/galley-kitchen/photo-2.webp",
        "width": 960,
        "height": 1280,
        "caption": "Countertop installation",
        "alt": "Stone countertop and sink above unfinished cabinet boxes"
      },
      {
        "src": "/img/spaces/gallery/galley-kitchen/photo-3.webp",
        "original": "/img/spaces/gallery/galley-kitchen/photo-3.webp",
        "width": 960,
        "height": 1280,
        "caption": "Fitting the drawer fronts",
        "alt": "Oak drawer fronts installed beneath a stone countertop"
      },
      {
        "src": "/img/spaces/gallery/galley-kitchen/photo-12.webp",
        "original": "/img/spaces/gallery/galley-kitchen/photo-12.webp",
        "width": 960,
        "height": 1280,
        "caption": "Cabinetry and storage",
        "alt": "Oak galley cabinets with fitted doors and a stainless steel under-counter appliance"
      },
      {
        "src": "/img/spaces/gallery/galley-kitchen/photo-4.webp",
        "original": "/img/spaces/gallery/galley-kitchen/photo-4.webp",
        "width": 1280,
        "height": 960,
        "caption": "Installing the wall cabinets",
        "alt": "Open oak wall cabinets during installation above a stone counter"
      },
      {
        "src": "/img/spaces/gallery/galley-kitchen/photo-5.webp",
        "original": "/img/spaces/gallery/galley-kitchen/photo-5.webp",
        "width": 1280,
        "height": 960,
        "caption": "Shelving around the arch",
        "alt": "Oak shelves fitted around an arched kitchen pass-through"
      },
      {
        "src": "/img/spaces/gallery/arches-renovation/full/img-2582.webp",
        "original": "/img/spaces/gallery/arches-renovation/full/img-2582.webp",
        "width": 960,
        "height": 1280,
        "caption": "Pantry demolition begins",
        "alt": "Builder wearing a respirator during demolition in the green pantry",
        "group": "Pantry room renovation"
      },
      {
        "src": "/img/spaces/gallery/arches-renovation/full/img-2611.webp",
        "original": "/img/spaces/gallery/arches-renovation/full/img-2611.webp",
        "width": 960,
        "height": 1280,
        "caption": "Stripping back the pantry walls",
        "alt": "Green pantry with wall finishes removed in horizontal bands",
        "group": "Pantry room renovation"
      },
      {
        "src": "/img/spaces/gallery/arches-renovation/full/img-2612.webp",
        "original": "/img/spaces/gallery/arches-renovation/full/img-2612.webp",
        "width": 960,
        "height": 1280,
        "caption": "Exposing the wall structure",
        "alt": "Narrow pantry with exposed lath walls and green ceiling",
        "group": "Pantry room renovation"
      },
      {
        "src": "/img/spaces/gallery/arches-renovation/full/img-2638.webp",
        "original": "/img/spaces/gallery/arches-renovation/full/img-2638.webp",
        "width": 960,
        "height": 1280,
        "caption": "Preparing the pantry wall",
        "alt": "Exposed pantry lath wall marked for new framing",
        "group": "Pantry room renovation"
      },
      {
        "src": "/img/spaces/gallery/arches-renovation/full/img-2694.webp",
        "original": "/img/spaces/gallery/arches-renovation/full/img-2694.webp",
        "width": 960,
        "height": 1280,
        "caption": "Rerouting the pantry ductwork",
        "alt": "Metal ductwork fitted through an opened section of pantry wall",
        "group": "Pantry room renovation"
      },
      {
        "src": "/img/spaces/gallery/arches-renovation/full/img-2741.webp",
        "original": "/img/spaces/gallery/arches-renovation/full/img-2741.webp",
        "width": 960,
        "height": 1280,
        "caption": "The pantry opening is framed",
        "alt": "Newly framed opening between exposed pantry lath walls",
        "group": "Pantry room renovation"
      },
      {
        "src": "/img/spaces/gallery/arches-renovation/full/img-2788.webp",
        "original": "/img/spaces/gallery/arches-renovation/full/img-2788.webp",
        "width": 960,
        "height": 1280,
        "caption": "Laying out the pantry pass-through",
        "alt": "Blue tape marking an arched pass-through on a peach wall",
        "group": "Pantry pass-through"
      },
      {
        "src": "/img/spaces/gallery/arches-renovation/full/img-2817.webp",
        "original": "/img/spaces/gallery/arches-renovation/full/img-2817.webp",
        "width": 960,
        "height": 1280,
        "caption": "Drywall wraps the opening",
        "alt": "Fresh drywall forming a rounded pantry pass-through",
        "group": "Pantry pass-through"
      },
      {
        "src": "/img/spaces/gallery/arches-renovation/full/img-2822.webp",
        "original": "/img/spaces/gallery/arches-renovation/full/img-2822.webp",
        "width": 960,
        "height": 1280,
        "caption": "The pantry partitions take shape",
        "alt": "Drywalled pantry partitions with a small arched pass-through",
        "group": "Pantry pass-through"
      },
      {
        "src": "/img/spaces/gallery/arches-renovation/full/img-2962.webp",
        "original": "/img/spaces/gallery/arches-renovation/full/img-2962.webp",
        "width": 960,
        "height": 1280,
        "caption": "The pass-through, plastered",
        "alt": "Small arched pantry pass-through in a newly plastered wall",
        "group": "Pantry pass-through"
      },
      {
        "src": "/img/spaces/gallery/arches-renovation/full/img-2963.webp",
        "original": "/img/spaces/gallery/arches-renovation/full/img-2963.webp",
        "width": 960,
        "height": 1280,
        "caption": "Fresh plaster around the opening",
        "alt": "White plastered wall with a small arched pantry opening",
        "group": "Pantry pass-through"
      },
      {
        "src": "/img/spaces/gallery/arches-renovation/full/img-3077.webp",
        "original": "/img/spaces/gallery/arches-renovation/full/img-3077.webp",
        "width": 960,
        "height": 1280,
        "caption": "The painted pass-through",
        "alt": "Peach-painted arched pantry pass-through in a white wall",
        "group": "Pantry pass-through"
      },
      {
        "src": "/img/spaces/gallery/arches-renovation/full/img-3078.webp",
        "original": "/img/spaces/gallery/arches-renovation/full/img-3078.webp",
        "width": 960,
        "height": 1280,
        "caption": "A framed view into the pantry",
        "alt": "Arched peach pass-through framing a window in the pantry",
        "group": "Pantry pass-through"
      },
      {
        "src": "/img/spaces/gallery/arches-renovation/full/img-3081.webp",
        "original": "/img/spaces/gallery/arches-renovation/full/img-3081.webp",
        "width": 960,
        "height": 1280,
        "caption": "The finished pantry opening",
        "alt": "Finished arched pantry opening painted peach inside",
        "group": "Pantry pass-through"
      }
    ],
    "videos": [
      {
        "src": "/img/spaces/gallery/galley-kitchen/cabinet-fitting.mp4",
        "poster": "/img/spaces/gallery/galley-kitchen/cabinet-fitting-poster.webp",
        "caption": "Fitting the tall kitchen cabinet",
        "afterImage": "/img/spaces/gallery/galley-kitchen/photo-2.webp"
      },
      {
        "src": "/img/spaces/gallery/galley-kitchen/cabinet-door-work.mp4",
        "poster": "/img/spaces/gallery/galley-kitchen/cabinet-door-work-poster.webp",
        "caption": "Working on the oak cabinet doors",
        "afterImage": "/img/spaces/gallery/galley-kitchen/photo-3.webp"
      },
      {
        "src": "/img/spaces/gallery/galley-kitchen/tall-cabinet-progress.mp4",
        "poster": "/img/spaces/gallery/galley-kitchen/tall-cabinet-progress-poster.webp",
        "caption": "Tall cabinet installation in progress",
        "afterImage": "/img/spaces/gallery/galley-kitchen/photo-12.webp"
      },
      {
        "src": "/img/spaces/gallery/arches-renovation/full/framing-lintel.mp4",
        "poster": "/img/spaces/gallery/arches-renovation/full/framing-lintel-poster.webp",
        "caption": "Building the pantry opening",
        "afterImage": "/img/spaces/gallery/arches-renovation/full/img-2694.webp"
      }
    ],
    "year": "2026"
  },
  {
    "id": "arches-renovation",
    "hidden": true,
    "shortTitle": "Let’s add some arches",
    "title": "Let’s add some arches",
    "description": "A room-by-room renovation built around new openings and curved details, from demolition and framing to plaster, paint, and finish work.",
    "images": [
      {
        "src": "/img/spaces/gallery/arches-renovation/full/img-2757.webp",
        "original": "/img/spaces/gallery/arches-renovation/full/img-2757.webp",
        "width": 960,
        "height": 1280,
        "caption": "Framing the tall passage",
        "alt": "Tall new passage framed with wood studs",
        "group": "Framing & services"
      },
      {
        "src": "/img/spaces/gallery/arches-renovation/full/img-2838.webp",
        "original": "/img/spaces/gallery/arches-renovation/full/img-2838.webp",
        "width": 960,
        "height": 1280,
        "caption": "Two arches, aligned",
        "alt": "Tall arched doorway aligned with a smaller pass-through",
        "group": "Building the arches"
      },
      {
        "src": "/img/spaces/gallery/arches-renovation/full/img-2865.webp",
        "original": "/img/spaces/gallery/arches-renovation/full/img-2865.webp",
        "width": 960,
        "height": 1280,
        "caption": "The passage after plaster",
        "alt": "Newly plastered room with a rounded doorway leading to a peach room",
        "group": "Building the arches"
      },
      {
        "src": "/img/spaces/gallery/arches-renovation/full/img-2924.webp",
        "original": "/img/spaces/gallery/arches-renovation/full/img-2924.webp",
        "width": 960,
        "height": 1280,
        "caption": "Clean lines after painting",
        "alt": "White room with a finished arched doorway and wood floor",
        "group": "Plaster, paint & finish"
      },
      {
        "src": "/img/spaces/gallery/arches-renovation/full/img-2990.webp",
        "original": "/img/spaces/gallery/arches-renovation/full/img-2990.webp",
        "width": 960,
        "height": 1280,
        "caption": "The peach room restored",
        "alt": "Finished peach room with a tall arched doorway and wood floor",
        "group": "Plaster, paint & finish"
      },
      {
        "src": "/img/spaces/gallery/arches-renovation/full/img-2991.webp",
        "original": "/img/spaces/gallery/arches-renovation/full/img-2991.webp",
        "width": 960,
        "height": 1280,
        "caption": "A softer transition between rooms",
        "alt": "Finished white room looking through a rounded doorway into a peach room",
        "group": "Plaster, paint & finish"
      }
    ],
    "videos": [
      {
        "src": "/img/spaces/gallery/arches-renovation/full/finished-walkthrough.mp4",
        "poster": "/img/spaces/gallery/arches-renovation/full/finished-walkthrough-poster.webp",
        "caption": "A walkthrough of the finished rooms"
      }
    ],
    "year": "2025"
  },
  {
    "id": "walnut-shelving",
    "shortTitle": "Solid walnut shelving",
    "title": "Solid walnut shelving",
    "description": "Open storage with rounded edges, built for everyday use.",
    "images": [
      {
        "src": "/img/spaces/gallery/walnut-shelving/photo-14.webp",
        "original": "/img/spaces/gallery/walnut-shelving/photo-14.webp",
        "width": 960,
        "height": 1280,
        "caption": "Kitchen shelves in use",
        "alt": "Corner walnut kitchen shelves holding plates, cookware, and cups"
      },
      {
        "src": "/img/spaces/gallery/walnut-shelving/photo-13.webp",
        "original": "/img/spaces/gallery/walnut-shelving/photo-13.webp",
        "width": 1280,
        "height": 960,
        "caption": "The corner shelving, installed",
        "alt": "Empty walnut shelves wrapping around a kitchen corner above white tile"
      }
    ],
    "videos": [
      {
        "src": "/img/spaces/gallery/walnut-shelving/kitchen-work.mp4",
        "poster": "/img/spaces/gallery/walnut-shelving/kitchen-work-poster.webp",
        "caption": "Working in the kitchen",
        "afterImage": "/img/spaces/gallery/walnut-shelving/photo-13.webp"
      }
    ],
    "year": "2025"
  },
  {
    "id": "slot-shelving-construction",
    "shortTitle": "Slot shelving construction",
    "title": "Slot shelving construction",
    "description": "Freestanding shelving with rounded ends and slotted components cut on a CNC router.",
    "images": [
      {
        "src": "/img/spaces/gallery/walnut-shelving/freestanding-shelves-front.webp",
        "original": "/img/spaces/gallery/walnut-shelving/freestanding-shelves-front.webp",
        "width": 1500,
        "height": 2000,
        "caption": "Freestanding shelves in use",
        "alt": "Walnut shelving with rounded shelf ends holding bottles and glassware"
      },
      {
        "src": "/img/spaces/gallery/walnut-shelving/cnc-shelf-components.webp",
        "original": "/img/spaces/gallery/walnut-shelving/cnc-shelf-components.webp",
        "width": 1500,
        "height": 2000,
        "caption": "Machining the shelf components",
        "alt": "CNC router cutting rounded shelf components and slots from a dark wooden panel"
      },
      {
        "src": "/img/spaces/gallery/walnut-shelving/photo-11.webp",
        "original": "/img/spaces/gallery/walnut-shelving/photo-11.webp",
        "width": 1500,
        "height": 2000,
        "caption": "Freestanding shelving",
        "alt": "Tall wooden shelving with rounded ends holding bottles and glassware"
      },
      {
        "src": "/img/spaces/gallery/walnut-shelving/freestanding-shelves-angle.webp",
        "original": "/img/spaces/gallery/walnut-shelving/freestanding-shelves-angle.webp",
        "width": 1500,
        "height": 2000,
        "caption": "Rounded shelves and uprights",
        "alt": "Angled view of freestanding walnut shelves and projecting rounded shelf ends"
      }
    ],
    "year": "2024"
  },
  {
    "id": "radiator-covers",
    "shortTitle": "Custom radiator covers",
    "title": "Custom radiator covers",
    "description": "Oak enclosures with patterned metal screens and integrated open storage.",
    "images": [
      {
        "src": "/img/spaces/gallery/radiator-covers/photo-26.webp",
        "original": "/img/spaces/gallery/radiator-covers/photo-26.webp",
        "width": 1280,
        "height": 960,
        "caption": "Installed with open storage",
        "alt": "Finished oak radiator cover with open shelves beside a patterned rug"
      },
      {
        "src": "/img/spaces/gallery/radiator-covers/photo-20.webp",
        "original": "/img/spaces/gallery/radiator-covers/photo-20.webp",
        "width": 960,
        "height": 1280,
        "caption": "The smaller cover in the workshop",
        "alt": "Unfinished oak radiator cover with rounded top edges and arched pipe clearance"
      },
      {
        "src": "/img/spaces/gallery/radiator-covers/photo-21.webp",
        "original": "/img/spaces/gallery/radiator-covers/photo-21.webp",
        "width": 960,
        "height": 1280,
        "caption": "Screen and frame detail",
        "alt": "Black geometric screen fitted in an unfinished oak frame"
      },
      {
        "src": "/img/spaces/gallery/radiator-covers/photo-22.webp",
        "original": "/img/spaces/gallery/radiator-covers/photo-22.webp",
        "width": 1280,
        "height": 960,
        "caption": "Fitting the long enclosure",
        "alt": "Unfinished oak radiator enclosure and open shelves on a workbench"
      },
      {
        "src": "/img/spaces/gallery/radiator-covers/photo-23.webp",
        "original": "/img/spaces/gallery/radiator-covers/photo-23.webp",
        "width": 1280,
        "height": 960,
        "caption": "The smaller cover, finished",
        "alt": "Compact oak radiator cover with a patterned metal front"
      },
      {
        "src": "/img/spaces/gallery/radiator-covers/photo-24.webp",
        "original": "/img/spaces/gallery/radiator-covers/photo-24.webp",
        "width": 1280,
        "height": 960,
        "caption": "Shelves and grain",
        "alt": "Close view of oak shelves and side panel on a radiator cover"
      },
      {
        "src": "/img/spaces/gallery/radiator-covers/photo-25.webp",
        "original": "/img/spaces/gallery/radiator-covers/photo-25.webp",
        "width": 1280,
        "height": 960,
        "caption": "Oak and patterned metal",
        "alt": "Long oak radiator enclosure with a black geometric grille and shelves"
      }
    ],
    "year": "2025"
  },
  {
    "id": "murphy-wall",
    "shortTitle": "Walnut Murphy Wall",
    "title": "Walnut Murphy Wall",
    "description": "A built-in Murphy bed wall with cabinetry, display shelves, custom wooden handles, and a contrasting floor inlay.",
    "images": [
      {
        "src": "/img/spaces/gallery/murphy-wall/photo-1.webp",
        "original": "/img/spaces/gallery/murphy-wall/photo-1.webp",
        "width": 960,
        "height": 1280,
        "caption": "Murphy wall, bed lowered",
        "alt": "Finished wooden Murphy wall with the bed lowered between tall cabinets and drawers"
      },
      {
        "src": "/img/spaces/gallery/arches-renovation/full/img-2585.webp",
        "original": "/img/spaces/gallery/arches-renovation/full/img-2585.webp",
        "width": 960,
        "height": 1280,
        "caption": "Opening up the room",
        "alt": "Room with plaster removed to prepare the wall for the Murphy bed",
        "group": "Room preparation"
      },
      {
        "src": "/img/spaces/gallery/arches-renovation/full/img-2609.webp",
        "original": "/img/spaces/gallery/arches-renovation/full/img-2609.webp",
        "width": 960,
        "height": 720,
        "caption": "The wall opened up",
        "alt": "Builder standing in front of the opened wall for the Murphy bed installation",
        "group": "Room preparation"
      },
      {
        "src": "/img/spaces/gallery/arches-renovation/full/img-2633.webp",
        "original": "/img/spaces/gallery/arches-renovation/full/img-2633.webp",
        "width": 960,
        "height": 720,
        "caption": "Planning the Murphy wall",
        "alt": "Graph-paper sketches showing the Murphy wall layout and surrounding room",
        "group": "Room preparation"
      },
      {
        "src": "/img/spaces/gallery/arches-renovation/full/img-2992.webp",
        "original": "/img/spaces/gallery/arches-renovation/full/img-2992.webp",
        "width": 960,
        "height": 720,
        "caption": "The room ready for cabinetry",
        "alt": "Finished white room with wood floors prepared for the Murphy wall",
        "group": "Room preparation"
      },
      {
        "src": "/img/spaces/gallery/arches-renovation/full/img-3121.webp",
        "original": "/img/spaces/gallery/arches-renovation/full/img-3121.webp",
        "width": 960,
        "height": 720,
        "caption": "Preparing the floor inlay",
        "alt": "Wood floor marked and opened for the Murphy wall's contrasting inlay",
        "group": "Floor inlay"
      },
      {
        "src": "/img/spaces/gallery/arches-renovation/photo-29.webp",
        "original": "/img/spaces/gallery/arches-renovation/photo-29.webp",
        "width": 960,
        "height": 1280,
        "caption": "Opening up the room",
        "alt": "Exposed wall and ceiling framing during an interior renovation"
      },
      {
        "src": "/img/spaces/gallery/floor-inlay/photo-27.webp",
        "original": "/img/spaces/gallery/floor-inlay/photo-27.webp",
        "width": 1280,
        "height": 960,
        "caption": "Fitting the inlay",
        "alt": "Tools surrounding a long contrasting wood inlay during installation"
      },
      {
        "src": "/img/spaces/gallery/floor-inlay/photo-28.webp",
        "original": "/img/spaces/gallery/floor-inlay/photo-28.webp",
        "width": 960,
        "height": 1280,
        "caption": "Mitered corner detail",
        "alt": "Close view of a dark wood border and pale center fitted into an oak floor"
      },
      {
        "src": "/img/spaces/gallery/murphy-wall/photo-4.webp",
        "original": "/img/spaces/gallery/murphy-wall/photo-4.webp",
        "width": 960,
        "height": 1280,
        "caption": "Building the bed frame",
        "alt": "Wooden Murphy bed frame with cross supports during assembly"
      },
      {
        "src": "/img/spaces/gallery/murphy-wall/photo-3.webp",
        "original": "/img/spaces/gallery/murphy-wall/photo-3.webp",
        "width": 960,
        "height": 1280,
        "caption": "Assembly in progress",
        "alt": "Murphy bed frame and cabinet panels laid out during installation"
      },
      {
        "src": "/img/spaces/gallery/murphy-wall/photo-2.webp",
        "original": "/img/spaces/gallery/murphy-wall/photo-2.webp",
        "width": 960,
        "height": 1280,
        "caption": "Bed cabinet and drawer boxes",
        "alt": "Closed Murphy bed cabinet flanked by unfinished drawer boxes above a contrasting floor inlay"
      },
      {
        "src": "/img/spaces/gallery/murphy-wall/photo-10.webp",
        "original": "/img/spaces/gallery/murphy-wall/photo-10.webp",
        "width": 1280,
        "height": 960,
        "caption": "Fitting the cabinetry",
        "alt": "Murphy wall with the bed closed and drawer fronts still being fitted"
      },
      {
        "src": "/img/spaces/gallery/murphy-wall/photo-6.webp",
        "original": "/img/spaces/gallery/murphy-wall/photo-6.webp",
        "width": 960,
        "height": 1280,
        "caption": "Fabricating the handles",
        "alt": "Wooden cabinet handles in several sizes laid out on a workshop bench"
      },
      {
        "src": "/img/spaces/gallery/murphy-wall/photo-5.webp",
        "original": "/img/spaces/gallery/murphy-wall/photo-5.webp",
        "width": 960,
        "height": 1280,
        "caption": "Handle mounting detail",
        "alt": "Underside of three wooden handles with threaded brass mounting inserts"
      },
      {
        "src": "/img/spaces/gallery/murphy-wall/photo-9.webp",
        "original": "/img/spaces/gallery/murphy-wall/photo-9.webp",
        "width": 960,
        "height": 1280,
        "caption": "Shelving behind the bed",
        "alt": "Built-in display shelves and storage behind the lowered Murphy bed frame"
      },
      {
        "src": "/img/spaces/gallery/murphy-wall/photo-7.webp",
        "original": "/img/spaces/gallery/murphy-wall/photo-7.webp",
        "width": 960,
        "height": 1280,
        "caption": "Custom handles, installed",
        "alt": "Cylindrical wooden handles on the Murphy wall cabinet doors and drawers above the floor inlay"
      }
    ],
    "credits": [
      {
        "name": "Tom Reynolds Design & Build",
        "role": "Co-design and construction",
        "url": "https://www.instagram.com/thomasrey_designbuild/"
      },
      {
        "name": "Alex Bloom",
        "role": "Concept, co-design, and handle design & fabrication"
      }
    ],
    "videos": [
      {
        "src": "/img/spaces/gallery/murphy-wall/handle-installation.mp4",
        "poster": "/img/spaces/gallery/murphy-wall/handle-installation-poster.webp",
        "caption": "Installing the custom handles",
        "afterImage": "/img/spaces/gallery/murphy-wall/photo-5.webp"
      }
    ],
    "year": "2026"
  },
  {
    "id": "airstream",
    "shortTitle": "Airstream",
    "title": "The Silver Shaka",
    "year": "2020–2023",
    "description": "A complete renovation and rebuild of a 1965 Airstream Overlander, from the chassis to custom cabinetry.",
    "images": [
      {
        "src": "/img/spaces/gallery/airstream/exterior_florida.webp",
        "original": "/img/projects/silvershaka/exterior_florida.jpg.webp",
        "width": 1594,
        "height": 1210,
        "caption": "The Silver Shaka outdoors",
        "alt": "The restored silver Airstream parked beneath trees",
        "group": "Interior & exterior"
      },
      {
        "src": "/img/spaces/gallery/airstream/gantry-front-drawing.webp",
        "original": "/img/spaces/gallery/airstream/gantry-front-drawing.webp",
        "width": 1200,
        "height": 1200,
        "caption": "Shell-lift gantry study · Front view",
        "alt": "Annotated front-view drawing of a wooden gantry with cargo strap and chain hoist",
        "group": "Shell lift & chassis restoration"
      },
      {
        "src": "/img/spaces/gallery/airstream/gantry-side-drawing.webp",
        "original": "/img/spaces/gallery/airstream/gantry-side-drawing.webp",
        "width": 1200,
        "height": 1200,
        "caption": "Shell-lift gantry study · Side view",
        "alt": "Side-view drawing showing two wooden gantries joined by diagonal cross bracing",
        "group": "Shell lift & chassis restoration"
      },
      {
        "src": "/img/spaces/gallery/airstream/wheel-arch-work.webp",
        "original": "/img/spaces/gallery/airstream/wheel-arch-work.webp",
        "width": 960,
        "height": 1280,
        "caption": "Working around the wheel arch",
        "alt": "Close view of drilling work beside the Airstream aluminum wheel arch and original hubcap",
        "group": "Fabrication & exterior details"
      },
      {
        "src": "/img/spaces/gallery/airstream/shell-separated.webp",
        "original": "/img/spaces/gallery/airstream/shell-separated.webp",
        "width": 1280,
        "height": 960,
        "caption": "Shell and chassis separated",
        "alt": "Airstream shell supported by wooden gantries with the bare trailer chassis pulled clear",
        "group": "Shell lift & chassis restoration"
      },
      {
        "src": "/img/spaces/gallery/airstream/chassis-metalwork.webp",
        "original": "/img/spaces/gallery/airstream/chassis-metalwork.webp",
        "width": 1500,
        "height": 2000,
        "caption": "Working on the chassis",
        "alt": "Person using an angle grinder on the exposed trailer chassis beside the detached Airstream shell",
        "group": "Shell lift & chassis restoration"
      },
      {
        "src": "/img/spaces/gallery/airstream/restored-chassis.webp",
        "original": "/img/spaces/gallery/airstream/restored-chassis.webp",
        "width": 1280,
        "height": 1280,
        "caption": "The restored frame",
        "alt": "Black-painted Airstream chassis under wooden lifting gantries with the aluminum shell behind it",
        "group": "Shell lift & chassis restoration"
      },
      {
        "src": "/img/spaces/gallery/airstream/chassis-outdoors.webp",
        "original": "/img/spaces/gallery/airstream/chassis-outdoors.webp",
        "width": 1125,
        "height": 1174,
        "caption": "Restored chassis outdoors",
        "alt": "Black-painted bare Airstream chassis with wiring and rear lights in an outdoor work area"
      },
      {
        "src": "/img/spaces/gallery/airstream/repainted_chassis.webp",
        "original": "/img/projects/silvershaka/repainted_chassis.jpg.webp",
        "width": 1600,
        "height": 1600,
        "caption": "Chassis restoration",
        "alt": "The exposed Airstream chassis after repainting",
        "group": "Shell lift & chassis restoration"
      },
      {
        "src": "/img/spaces/gallery/airstream/shock-mount-template.webp",
        "original": "/img/spaces/gallery/airstream/shock-mount-template.webp",
        "width": 1500,
        "height": 2000,
        "caption": "Laying out the shock mount",
        "alt": "Cardboard mounting template held behind a shock absorber eye beneath the Airstream chassis",
        "group": "Shell lift & chassis restoration"
      },
      {
        "src": "/img/spaces/gallery/airstream/suspension-detail.webp",
        "original": "/img/spaces/gallery/airstream/suspension-detail.webp",
        "width": 1500,
        "height": 2000,
        "caption": "Suspension and brake detail",
        "alt": "Close view of the restored chassis with shock absorber and brake drum",
        "group": "Shell lift & chassis restoration"
      },
      {
        "src": "/img/spaces/gallery/airstream/subfloor-rebuild.webp",
        "original": "/img/spaces/gallery/airstream/subfloor-rebuild.webp",
        "width": 1280,
        "height": 960,
        "caption": "Rebuilding the subfloor",
        "alt": "Detached Airstream shell behind the trailer chassis with new floor panels being fitted",
        "group": "Shell lift & chassis restoration"
      },
      {
        "src": "/img/spaces/gallery/airstream/underfloor-work.webp",
        "original": "/img/spaces/gallery/airstream/underfloor-work.webp",
        "width": 1500,
        "height": 2000,
        "caption": "Working beneath the floor",
        "alt": "Person on a rolling creeper using a drill beneath the restored black chassis and floor panels",
        "group": "Shell lift & chassis restoration"
      },
      {
        "src": "/img/spaces/gallery/airstream/sheet-panel-cutting.webp",
        "original": "/img/spaces/gallery/airstream/sheet-panel-cutting.webp",
        "width": 960,
        "height": 1280,
        "caption": "Cutting the sheet panels",
        "alt": "Person cutting a long marked sheet panel outdoors during the Airstream rebuild",
        "group": "Fabrication & exterior details"
      },
      {
        "src": "/img/spaces/gallery/airstream/underbody-fitting.webp",
        "original": "/img/spaces/gallery/airstream/underbody-fitting.webp",
        "width": 1500,
        "height": 2000,
        "caption": "Underbody fitting detail",
        "alt": "Black circular fitting and hose clamp mounted through a chassis-side panel beside a wheel",
        "group": "Fabrication & exterior details"
      },
      {
        "src": "/img/spaces/gallery/airstream/rear-cable-compartment.webp",
        "original": "/img/spaces/gallery/airstream/rear-cable-compartment.webp",
        "width": 1600,
        "height": 1200,
        "caption": "Rear cable compartment",
        "alt": "Open aluminum rear compartment holding coiled electrical cables"
      },
      {
        "src": "/img/spaces/gallery/airstream/wiring-spool-rack.webp",
        "original": "/img/spaces/gallery/airstream/wiring-spool-rack.webp",
        "width": 1500,
        "height": 2000,
        "caption": "Preparing the wiring",
        "alt": "Seven colored wire spools on a temporary rack beside the exposed Airstream chassis",
        "group": "Electrical & fabrication"
      },
      {
        "src": "/img/spaces/gallery/airstream/electrical-cabinet.webp",
        "original": "/img/spaces/gallery/airstream/electrical-cabinet.webp",
        "width": 1280,
        "height": 960,
        "caption": "Electrical cabinet and cable routing",
        "alt": "Open Airstream cabinet with solar charge controllers, fuse blocks, and loose wiring",
        "group": "Electrical & fabrication"
      },
      {
        "src": "/img/spaces/gallery/airstream/electrical-installation.webp",
        "original": "/img/spaces/gallery/airstream/electrical-installation.webp",
        "width": 1280,
        "height": 960,
        "caption": "Installing the electrical system",
        "alt": "Airstream electrical equipment and wiring behind an unfinished seating cabinet",
        "group": "Electrical & fabrication"
      },
      {
        "src": "/img/spaces/gallery/airstream/under-sink-plumbing.webp",
        "original": "/img/spaces/gallery/airstream/under-sink-plumbing.webp",
        "width": 1200,
        "height": 1600,
        "caption": "Under-sink plumbing and filtration",
        "alt": "Compact sink drain, hoses, and water-filter housing fitted inside the Airstream cabinet"
      },
      {
        "src": "/img/spaces/gallery/airstream/mounting-plate-layout.webp",
        "original": "/img/spaces/gallery/airstream/mounting-plate-layout.webp",
        "width": 960,
        "height": 1280,
        "caption": "Laying out the mounting plates",
        "alt": "Rounded metal mounting plate marked for drilling beside cutting and measuring tools",
        "group": "Electrical & fabrication"
      },
      {
        "src": "/img/spaces/gallery/airstream/copper-mounts.webp",
        "original": "/img/spaces/gallery/airstream/copper-mounts.webp",
        "width": 1280,
        "height": 960,
        "caption": "Copper and metal mounting details",
        "alt": "Copper fittings and shaped metal mounting plates installed on an interior panel",
        "group": "Electrical & fabrication"
      },
      {
        "src": "/img/spaces/gallery/airstream/formed-panels.webp",
        "original": "/img/spaces/gallery/airstream/formed-panels.webp",
        "width": 960,
        "height": 1280,
        "caption": "Formed left and right panels",
        "alt": "Two silver formed panels labeled L and R with recessed circular shapes",
        "group": "Fabrication & exterior details"
      },
      {
        "src": "/img/spaces/gallery/airstream/interior-before-after.webp",
        "original": "/img/spaces/gallery/airstream/interior-before-after.webp",
        "width": 1280,
        "height": 1280,
        "caption": "Interior finish, before and after",
        "alt": "Side-by-side views of the Airstream interior before and after painting",
        "group": "Interior build"
      },
      {
        "src": "/img/spaces/gallery/airstream/curved-partitions-cabinets.webp",
        "original": "/img/spaces/gallery/airstream/curved-partitions-cabinets.webp",
        "width": 1200,
        "height": 1600,
        "caption": "Fitting curved partitions and cabinets",
        "alt": "Unfinished plywood base cabinets and curved white partitions along the Airstream aisle"
      },
      {
        "src": "/img/spaces/gallery/airstream/seating-upholstery-layout.webp",
        "original": "/img/spaces/gallery/airstream/seating-upholstery-layout.webp",
        "width": 1600,
        "height": 1200,
        "caption": "Laying out the seating upholstery",
        "alt": "Upholstery batting laid over the Airstream seating platform during construction"
      },
      {
        "src": "/img/spaces/gallery/airstream/galley_sketches.webp",
        "original": "/img/projects/silvershaka/galley_sketches.jpg.webp",
        "width": 1600,
        "height": 1200,
        "caption": "Galley sketches",
        "alt": "Hand-drawn cabinet and galley layouts for the Airstream renovation",
        "group": "Interior build"
      },
      {
        "src": "/img/spaces/gallery/airstream/cabinet-panels-prepared.webp",
        "original": "/img/spaces/gallery/airstream/cabinet-panels-prepared.webp",
        "width": 1200,
        "height": 1600,
        "caption": "Preparing the cabinet panels",
        "alt": "Wooden cabinet panels and trim laid out in the workshop"
      },
      {
        "src": "/img/spaces/gallery/airstream/sliding-cabinet-detail.webp",
        "original": "/img/spaces/gallery/airstream/sliding-cabinet-detail.webp",
        "width": 1200,
        "height": 1600,
        "caption": "Sliding cabinet and trim detail",
        "alt": "Close view of wooden cabinet edging and a sliding track beside a white partition"
      },
      {
        "src": "/img/spaces/gallery/airstream/interior_bedframes.webp",
        "original": "/img/projects/silvershaka/interior_bedframes.jpg.webp",
        "width": 1318,
        "height": 1758,
        "caption": "Building the bed frames",
        "alt": "Two wooden slatted bed frames under construction inside the Airstream",
        "group": "Interior build"
      },
      {
        "src": "/img/spaces/gallery/airstream/twin-bed-upholstery.webp",
        "original": "/img/spaces/gallery/airstream/twin-bed-upholstery.webp",
        "width": 1600,
        "height": 1200,
        "caption": "Fitting the bedside upholstery",
        "alt": "Upholstered wall panel and twin mattress beneath a curtained Airstream window"
      },
      {
        "src": "/img/spaces/gallery/airstream/bedroom-door-fitting.webp",
        "original": "/img/spaces/gallery/airstream/bedroom-door-fitting.webp",
        "width": 1200,
        "height": 1600,
        "caption": "Fitting the bedroom doorway",
        "alt": "Wooden door frame being fitted between twin beds inside the Airstream"
      },
      {
        "src": "/img/spaces/gallery/airstream/frosted-door-workshop.webp",
        "original": "/img/spaces/gallery/airstream/frosted-door-workshop.webp",
        "width": 1600,
        "height": 1200,
        "caption": "Frosted-panel door on the workbench",
        "alt": "Wooden door with two frosted panels and a latch supported on a workbench"
      },
      {
        "src": "/img/spaces/gallery/airstream/interior_electrical.webp",
        "original": "/img/projects/silvershaka/interior_electrical.jpg.webp",
        "width": 1600,
        "height": 1107,
        "caption": "Behind the cabinetry",
        "alt": "Electrical equipment and wiring concealed beneath an Airstream seat",
        "group": "Electrical & fabrication"
      },
      {
        "src": "/img/spaces/gallery/airstream/exterior-badge.webp",
        "original": "/img/spaces/gallery/airstream/exterior-badge.webp",
        "width": 1280,
        "height": 960,
        "caption": "Exterior badge detail",
        "alt": "Restored silver and black badge with horizontal ridges resting on paper on a desk",
        "group": "Fabrication & exterior details"
      },
      {
        "src": "/img/spaces/gallery/airstream/image-152.webp",
        "original": "/img/projects/silvershaka/image%20152.jpg.webp",
        "width": 1318,
        "height": 1758,
        "caption": "At the door",
        "alt": "The open Airstream doorway and entry steps",
        "group": "Interior & exterior"
      },
      {
        "src": "/img/spaces/gallery/airstream/interior_couch.webp",
        "original": "/img/projects/silvershaka/interior_couch.jpg.webp",
        "width": 1382,
        "height": 1756,
        "caption": "Custom seating and cabinetry",
        "alt": "The Airstream interior with upholstered seating, wooden cabinetry, and a central window",
        "group": "Interior & exterior"
      },
      {
        "src": "/img/spaces/gallery/airstream/interior_galley.webp",
        "original": "/img/projects/silvershaka/interior_galley.jpg.webp",
        "width": 1389,
        "height": 1758,
        "caption": "Galley and built-in furniture",
        "alt": "The Airstream galley and slatted wooden cabinetry",
        "group": "Interior & exterior"
      },
      {
        "src": "/img/spaces/gallery/airstream/image-137.webp",
        "original": "/img/projects/silvershaka/image%20137.jpg.webp",
        "width": 1318,
        "height": 1758,
        "caption": "Cabinetry detail",
        "alt": "Wooden cabinetry beneath a curtained Airstream window",
        "group": "Interior & exterior"
      },
      {
        "src": "/img/spaces/gallery/airstream/interior_tv-lift.webp",
        "original": "/img/projects/silvershaka/interior_tv%20lift.jpg.webp",
        "width": 1391,
        "height": 1758,
        "caption": "Concealed TV lift",
        "alt": "A television raised from custom wooden cabinetry inside the Airstream",
        "group": "Interior & exterior"
      },
      {
        "src": "/img/spaces/gallery/airstream/interior_bathroom.webp",
        "original": "/img/projects/silvershaka/interior_bathroom.jpg.webp",
        "width": 1317,
        "height": 1756,
        "caption": "Bathroom",
        "alt": "The finished Airstream bathroom with a shower and wooden toilet surround",
        "group": "Interior & exterior"
      },
      {
        "src": "/img/spaces/gallery/airstream/interior_in_use.webp",
        "original": "/img/projects/silvershaka/interior_in_use.jpg.webp",
        "width": 1299,
        "height": 1756,
        "caption": "A space in use",
        "alt": "The Airstream interior in use, viewed down the central aisle",
        "group": "Interior & exterior"
      }
    ],
    "videos": [
      {
        "src": "/img/spaces/gallery/airstream/painted-interior.mp4",
        "poster": "/img/spaces/gallery/airstream/painted-interior-poster.webp",
        "caption": "The freshly painted Airstream interior",
        "afterImage": "/img/spaces/gallery/airstream/interior-before-after.webp"
      },
      {
        "src": "/img/spaces/gallery/airstream/interior-rebuild.mp4",
        "poster": "/img/spaces/gallery/airstream/interior-rebuild-poster.webp",
        "caption": "Rebuilding the Airstream interior",
        "afterImage": "/img/spaces/gallery/airstream/gantry-side-drawing.webp"
      },
      {
        "src": "/img/spaces/gallery/airstream/cabinet-fitting-timelapse.mp4",
        "poster": "/img/spaces/gallery/airstream/cabinet-fitting-timelapse-poster.webp",
        "caption": "Fitting the Airstream cabinetry",
        "afterImage": "/img/spaces/gallery/airstream/sliding-cabinet-detail.webp"
      },
      {
        "src": "/img/spaces/gallery/airstream/door-build-timelapse.mp4",
        "poster": "/img/spaces/gallery/airstream/door-build-timelapse-poster.webp",
        "caption": "Building the wooden door",
        "afterImage": "/img/spaces/gallery/airstream/bedroom-door-fitting.webp"
      },
      {
        "src": "/img/spaces/gallery/airstream/installed-frosted-door.mp4",
        "poster": "/img/spaces/gallery/airstream/installed-frosted-door-poster.webp",
        "caption": "The frosted-panel door, installed",
        "afterImage": "/img/spaces/gallery/airstream/frosted-door-workshop.webp"
      },
      {
        "src": "/img/spaces/gallery/airstream/partition-build-progress.mp4",
        "poster": "/img/spaces/gallery/airstream/partition-build-progress-poster.webp",
        "caption": "Curved partitions and cabinetry in progress",
        "afterImage": "/img/spaces/gallery/airstream/curved-partitions-cabinets.webp"
      }
    ]
  },
  {
    "id": "woolley-market",
    "shortTitle": "Woolley Market",
    "title": "The Woolley Market",
    "year": "2014",
    "description": "Creative direction, brand identity, packaging, interiors, storefront signage, and web design for a community marketplace in Sedro-Woolley, Washington.",
    "images": [
      {
        "src": "/img/spaces/gallery/woolley-market/specialitems-neon.webp",
        "original": "/img/projects/woolleymarket/specialitems/neon.jpg.webp",
        "width": 1600,
        "height": 1063,
        "caption": "The neon mark in its storefront setting, above the painted BEER sign. Neon and production: Sign Mart.",
        "alt": "Red neon logo glowing above painted BEER lettering",
        "group": "Storefront & signage"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/metcalf.webp",
        "original": "/img/projects/woolleymarket/metcalf.jpg.webp",
        "width": 1600,
        "height": 966,
        "caption": "Historical Metcalf Street, Sedro-Woolley. The old streetscape provided context for a market identity rooted in the town’s own visual vocabulary.",
        "alt": "Historical black and white photograph of Metcalf Street in Sedro-Woolley",
        "group": "Historical references"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/fisherman.webp",
        "original": "/img/projects/woolleymarket/fisherman.jpg.webp",
        "width": 800,
        "height": 1260,
        "caption": "Historical fisherman reference, shown alongside its illustrated interpretation on an interior door in the original project.",
        "alt": "Historical portrait of a fisherman holding a large fish",
        "group": "Historical references"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/barn.webp",
        "original": "/img/projects/woolleymarket/barn.jpg.webp",
        "width": 1600,
        "height": 1017,
        "caption": "Barn-and-farmland imagery from the original project connects the market story to the surrounding agricultural landscape.",
        "alt": "Red-roofed white barn and cows in a rural landscape",
        "group": "Historical references"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/barn_extra.webp",
        "original": "/img/projects/woolleymarket/barn_extra.jpg.webp",
        "width": 1080,
        "height": 677,
        "caption": "Alternate barn image from the archive, part of the project’s agricultural reference material.",
        "alt": "Alternate image of a white barn and red roof in the Skagit Valley",
        "group": "Historical references"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/brand-tapestry.webp",
        "original": "/img/projects/woolleymarket/brand/tapestry.jpg.webp",
        "width": 1600,
        "height": 1200,
        "caption": "The “brand tapestry”: a family of marks and illustrations developed with True Hand Society to express the town’s character.",
        "alt": "Collection of Woolley Market marks, illustrations, and lettering",
        "group": "Brand identity"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/brand-logo-circle.webp",
        "original": "/img/projects/woolleymarket/brand/logo-circle.gif.webp",
        "width": 1600,
        "height": 1067,
        "caption": "Circular script mark from the family of identities developed with True Hand Society.",
        "alt": "White circular Woolley Market script logo on a dark red background",
        "group": "Brand identity"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/brand-logo-type.webp",
        "original": "/img/projects/woolleymarket/brand/logo-type.gif.webp",
        "width": 1600,
        "height": 1067,
        "caption": "Typographic mark with the market’s Metcalf Street address, developed with True Hand Society.",
        "alt": "Red Woolley Market typographic logo and Metcalf Street address",
        "group": "Brand identity"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/brand-logo-tusks.webp",
        "original": "/img/projects/woolleymarket/brand/logo-tusks.gif.webp",
        "width": 1600,
        "height": 1067,
        "caption": "Mammoth-and-tusks mark from the identity family developed with True Hand Society.",
        "alt": "White mammoth tusk logo and Woolley Market lettering on black",
        "group": "Brand identity"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/brand-logo-saw.webp",
        "original": "/img/projects/woolleymarket/brand/logo-saw.gif.webp",
        "width": 1600,
        "height": 1067,
        "caption": "The crosscut-saw mark connects the identity to Sedro-Woolley’s logging and craftsmanship references. Brand and illustration: True Hand Society.",
        "alt": "Woolley Market script inside a crosscut saw illustration",
        "group": "Brand identity"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/brand-mammothapproved.webp",
        "original": "/img/projects/woolleymarket/brand/mammothapproved.jpg.webp",
        "width": 1600,
        "height": 1200,
        "caption": "“Mammoth Approved” stamp variations extend the mammoth motif into supporting brand graphics.",
        "alt": "Mammoth Approved marks in several colors",
        "group": "Brand identity"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/twm-icon.webp",
        "original": "/img/projects/woolleymarket/twm-icon.gif.webp",
        "width": 400,
        "height": 400,
        "caption": "Mammoth mark with the market name and street address, part of the wider identity system.",
        "alt": "Black mammoth mark with Woolley Market lettering and address",
        "group": "Brand identity"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/woolleylogo.webp",
        "original": "/img/projects/woolleymarket/woolleylogo.gif.webp",
        "width": 600,
        "height": 400,
        "caption": "An alternate rendering of the circular script wordmark.",
        "alt": "Circular Woolley Market script logo on a light background",
        "group": "Brand identity"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/collateral-butcherpaper.webp",
        "original": "/img/projects/woolleymarket/collateral/butcherpaper.jpg.webp",
        "width": 1600,
        "height": 1200,
        "caption": "The identity becomes a repeating pattern on butcher paper, taking the brand into food packaging.",
        "alt": "Meat wrapped with patterned Woolley Market butcher paper",
        "group": "Packaging, apparel & vehicle lettering"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/collateral-giftcard.webp",
        "original": "/img/projects/woolleymarket/collateral/giftcard.jpg.webp",
        "width": 1600,
        "height": 1200,
        "caption": "A gift card pairs the mammoth identity with a photograph of the market storefront.",
        "alt": "Woolley Market gift card with a storefront photograph",
        "group": "Packaging, apparel & vehicle lettering"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/collateral-shirt.webp",
        "original": "/img/projects/woolleymarket/collateral/shirt.jpg.webp",
        "width": 1000,
        "height": 1000,
        "caption": "The mammoth mark applied to a market T-shirt.",
        "alt": "Dark red shirt printed with the mammoth brand mark",
        "group": "Packaging, apparel & vehicle lettering"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/specialitems-modelt.webp",
        "original": "/img/projects/woolleymarket/specialitems/modelt.jpg.webp",
        "width": 1600,
        "height": 1066,
        "caption": "The market identity applied to a vintage truck, carrying the brand beyond the storefront.",
        "alt": "Vintage truck with Woolley Market lettering on its door",
        "group": "Packaging, apparel & vehicle lettering"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/specialitems-modeltpoint.webp",
        "original": "/img/projects/woolleymarket/specialitems/modeltpoint.jpg.webp",
        "width": 640,
        "height": 640,
        "caption": "A closer look at the script mark and address on the truck door.",
        "alt": "Person pointing to the Woolley Market mark on the vintage truck",
        "group": "Packaging, apparel & vehicle lettering"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/exterior-paintingwall.webp",
        "original": "/img/projects/woolleymarket/exterior/paintingwall.jpg.webp",
        "width": 1600,
        "height": 2181,
        "caption": "Painting the storefront lettering by hand—putting the project’s craft-led approach into practice.",
        "alt": "Painter working on large storefront lettering",
        "group": "Storefront & signage"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/exterior-painting_window.webp",
        "original": "/img/projects/woolleymarket/exterior/painting_window.jpg.webp",
        "width": 612,
        "height": 612,
        "caption": "Window lettering in progress, an example of the identity physically executed on site.",
        "alt": "Painter hand-lettering the Woolley Market window logo",
        "group": "Storefront & signage"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/exterior-frontlogo.webp",
        "original": "/img/projects/woolleymarket/exterior/frontlogo.jpg.webp",
        "width": 1600,
        "height": 1600,
        "caption": "The typographic mark painted at storefront scale, with the 829 Metcalf Street address.",
        "alt": "Woolley Market wordmark painted on the storefront",
        "group": "Storefront & signage"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/exterior-windowlogo.webp",
        "original": "/img/projects/woolleymarket/exterior/windowlogo.jpg.webp",
        "width": 1600,
        "height": 1200,
        "caption": "The circular script mark applied to the market window.",
        "alt": "Woolley Market logo on a glass window",
        "group": "Storefront & signage"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/exterior-marquee.webp",
        "original": "/img/projects/woolleymarket/exterior/marquee.jpg.webp",
        "width": 1600,
        "height": 2181,
        "caption": "A vertical MARKET marquee makes the building visible along the street.",
        "alt": "Vertical MARKET sign on the brick building",
        "group": "Storefront & signage"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/exterior-coldbeer.webp",
        "original": "/img/projects/woolleymarket/exterior/coldbeer.jpg.webp",
        "width": 1600,
        "height": 1600,
        "caption": "Direct, familiar language: COLD BEER lettering above a storefront window.",
        "alt": "COLD BEER lettering above a storefront window",
        "group": "Storefront & signage"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/exterior-rearlogo.webp",
        "original": "/img/projects/woolleymarket/exterior/rearlogo.jpg.webp",
        "width": 1600,
        "height": 1063,
        "caption": "Script lettering applied directly to brick brings the brand into the building’s existing materials.",
        "alt": "Woolley Market logo painted directly on a brick wall",
        "group": "Storefront & signage"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/exterior-rearentrance.webp",
        "original": "/img/projects/woolleymarket/exterior/rearentrance.jpg.webp",
        "width": 1600,
        "height": 1063,
        "caption": "The rear entrance receives the same painted identity as the street-facing storefront.",
        "alt": "Rear entrance beneath the painted Woolley Market logo",
        "group": "Storefront & signage"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/exterior-frontentrance.webp",
        "original": "/img/projects/woolleymarket/exterior/frontentrance.jpg.webp",
        "width": 1600,
        "height": 800,
        "caption": "The front entrance brings together the market name, painted signs, and window graphics.",
        "alt": "The market entrance and painted storefront signage",
        "group": "Storefront & signage"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/exterior-corner.webp",
        "original": "/img/projects/woolleymarket/exterior/corner.jpg.webp",
        "width": 1600,
        "height": 738,
        "caption": "The market at the corner of Metcalf Street: the brand applied across an existing brick storefront.",
        "alt": "Woolley Market brick storefront seen from a street corner",
        "group": "Storefront & signage"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/exterior-gateway.webp",
        "original": "/img/projects/woolleymarket/exterior/gateway.jpg.webp",
        "width": 1600,
        "height": 1063,
        "caption": "“Sedro-Woolley: Gateway to the North Cascades.” A historical aerial view looks northeast, with Mount Baker in the distance.",
        "alt": "Historical aerial photograph of Sedro-Woolley with Gateway to the North Cascades lettering",
        "group": "Storefront & signage"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/interior-fisherman.webp",
        "original": "/img/projects/woolleymarket/interior/fisherman.jpg.webp",
        "width": 1397,
        "height": 2200,
        "caption": "The fisherman reference translated into a large illustrated figure on an interior door.",
        "alt": "Illustrated fisherman displayed on a wooden interior door",
        "group": "Interiors & gathering spaces"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/interior-hangingsigns.webp",
        "original": "/img/projects/woolleymarket/interior/hangingsigns.jpg.webp",
        "width": 1600,
        "height": 1066,
        "caption": "Hanging aisle signs carry the same lettering system into the market’s wayfinding.",
        "alt": "A hanging pasta sign beside a timber post",
        "group": "Interiors & gathering spaces"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/interior-herbsspices.webp",
        "original": "/img/projects/woolleymarket/interior/herbsspices.jpg.webp",
        "width": 1600,
        "height": 800,
        "caption": "Hand-painted herbs and spices lettering reflects the brief’s emphasis on craftsmanship.",
        "alt": "Hand-painted herbs and spices department lettering",
        "group": "Interiors & gathering spaces"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/interior-produce.webp",
        "original": "/img/projects/woolleymarket/interior/produce.jpg.webp",
        "width": 1600,
        "height": 1600,
        "caption": "Painted produce lettering pairs the food department with a quotation about agriculture.",
        "alt": "Produce displays under painted department lettering",
        "group": "Interiors & gathering spaces"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/interior-frozen.webp",
        "original": "/img/projects/woolleymarket/interior/frozen.jpg.webp",
        "width": 1600,
        "height": 1063,
        "caption": "Large painted department lettering carries the identity through the frozen and dairy aisles.",
        "alt": "Painted lettering above the frozen and dairy cases",
        "group": "Interiors & gathering spaces"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/interior-murals.webp",
        "original": "/img/projects/woolleymarket/interior/murals.jpg.webp",
        "width": 1600,
        "height": 534,
        "caption": "Painted lettering, timber, and market displays bring the environmental design together.",
        "alt": "Wide view of market shelving and painted interior graphics",
        "group": "Interiors & gathering spaces"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/aisle.webp",
        "original": "/img/projects/woolleymarket/aisle.jpg.webp",
        "width": 1600,
        "height": 800,
        "caption": "The identity in everyday use: a market aisle beneath exposed timber beams.",
        "alt": "Shoppers in a market aisle beneath exposed timber beams",
        "group": "Interiors & gathering spaces"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/interior-cafe.webp",
        "original": "/img/projects/woolleymarket/interior/cafe.jpg.webp",
        "width": 1600,
        "height": 1204,
        "caption": "Café lettering brings the market’s handmade visual language into a place to eat and gather.",
        "alt": "Market café with painted lettering above the counter",
        "group": "Interiors & gathering spaces"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/garden.webp",
        "original": "/img/projects/woolleymarket/garden.jpg.webp",
        "width": 1600,
        "height": 800,
        "caption": "A shared table makes room for the community at the heart of the market brief.",
        "alt": "Visitors gathered at a wooden table in the market",
        "group": "Interiors & gathering spaces"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/balcony.webp",
        "original": "/img/projects/woolleymarket/balcony.jpg.webp",
        "width": 1600,
        "height": 800,
        "caption": "Upstairs seating overlooks the market, extending the space for gathering.",
        "alt": "Visitors seated along the market balcony",
        "group": "Interiors & gathering spaces"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/specialitems-neon-detail.webp",
        "original": "/img/projects/woolleymarket/specialitems/neon-detail.jpg.webp",
        "width": 1600,
        "height": 1067,
        "caption": "The circular script identity translated into illuminated neon. Neon and production: Sign Mart.",
        "alt": "Illuminated red Woolley Market neon lettering",
        "group": "Storefront & signage"
      },
      {
        "src": "/img/spaces/gallery/woolley-market/web-wm-website.webp",
        "original": "/img/projects/woolleymarket/web/wm-website.jpg.webp",
        "width": 1023,
        "height": 704,
        "caption": "The archived market website extends the identity into digital design, pairing the brand with storefront photography.",
        "alt": "Archived Woolley Market website with storefront photography and navigation",
        "group": "Website"
      }
    ],
    "relatedProject": {
      "href": "/projects/woolley-market",
      "label": "View the Woolley Market case study"
    },
    "story": [
      {
        "title": "Revitalizing and celebrating a town with history as rich as its soil.",
        "text": "In January of 2014, I fell into one of the most interesting places and projects I’ve ever been able to work on. I was approached by Will Honea, the founder of the Market, and a team of highly dedicated people with uniquely focused experience in farming and market operations. I served as the market’s sole creative director for six months, engaged at pre-incorporation through the market’s first 50 hired employees. I oversaw, and in many cases physically executed, all aspects of the market’s brand strategy, identity, packaging, interior, exterior, and digital design."
      },
      {
        "title": "The challenge",
        "text": "The original brief was rooted in Sedro-Woolley’s logging history, the surrounding Skagit Valley’s farming community, and the town’s blue-collar character. The challenge was to introduce good food at a local fair market rate, in a visual language that felt familiar to the people who lived there."
      },
      {
        "title": "The strategy",
        "text": "Dig deep into history, and revitalize the town—on its own terms, with its own people and resources. Sell the idea of good food within the local vocabulary and, most importantly, at the local fair market rate. We had to honor the town’s tradition of craftsmanship and handmade pride in its signage and visual identity. I worked closely with True Hand Society to develop a brand tapestry of marks that combined these pillars and represented the essence of this hardworking, tough-talking town."
      }
    ],
    "credits": [
      {
        "name": "Alex Bloom",
        "role": "Creative direction, art direction, environmental design, web design & development"
      },
      {
        "name": "True Hand Society",
        "role": "Brand and illustration"
      },
      {
        "name": "Nathan Kane",
        "role": "Painting and photography"
      },
      {
        "name": "Sign Mart",
        "role": "Neon and production"
      },
      {
        "name": "Skagit Valley Signs",
        "role": "Digital printing"
      }
    ]
  },
  {
    "id": "utile-bench",
    "shortTitle": "Utile Bench",
    "title": "Utile Dining Bench",
    "year": "2024",
    "description": "A 60 × 18 × 18-inch dining bench built exclusively from utile wood and Titebond III glue.",
    "images": [
      {
        "src": "/img/spaces/gallery/utile-bench/bench_angle.webp",
        "original": "/img/projects/utilebench/bench_angle.jpg.webp",
        "width": 1583,
        "height": 1684,
        "caption": "The finished bench",
        "alt": "The slatted utile wood dining bench photographed from above at an angle"
      },
      {
        "src": "/img/spaces/gallery/utile-bench/notched-components.webp",
        "original": "/img/spaces/gallery/utile-bench/notched-components.webp",
        "width": 1500,
        "height": 2000,
        "caption": "Notched components",
        "alt": "Two wooden bench components with stepped notches cut into their ends"
      },
      {
        "src": "/img/spaces/gallery/utile-bench/drilling-bench-joinery.webp",
        "original": "/img/spaces/gallery/utile-bench/drilling-bench-joinery.webp",
        "width": 1600,
        "height": 1200,
        "caption": "Drilling the bench joinery",
        "alt": "Wooden rail clamped to an outdoor workbench with paired holes and wood shavings"
      },
      {
        "src": "/img/spaces/gallery/utile-bench/joinery-layout.webp",
        "original": "/img/spaces/gallery/utile-bench/joinery-layout.webp",
        "width": 1500,
        "height": 2000,
        "caption": "Preparing the joinery",
        "alt": "Wooden components with evenly spaced notches, tape, and drilled end holes"
      },
      {
        "src": "/img/spaces/gallery/utile-bench/parts-on-workbench.webp",
        "original": "/img/spaces/gallery/utile-bench/parts-on-workbench.webp",
        "width": 1500,
        "height": 2000,
        "caption": "Components before assembly",
        "alt": "Wooden bench rails and slats laid out on a workbench with drilled holes and notches"
      },
      {
        "src": "/img/spaces/gallery/utile-bench/bench-workshop.webp",
        "original": "/img/spaces/gallery/utile-bench/bench-workshop.webp",
        "width": 1280,
        "height": 960,
        "caption": "The bench in the workshop",
        "alt": "Slatted wooden dining bench with angled legs photographed in the workshop"
      },
      {
        "src": "/img/spaces/gallery/utile-bench/bench_end.webp",
        "original": "/img/projects/utilebench/bench_end.jpg.webp",
        "width": 1600,
        "height": 1657,
        "caption": "Slats and structure",
        "alt": "The end of the utile dining bench showing its wooden slats and supports"
      },
      {
        "src": "/img/spaces/gallery/utile-bench/slat-detail.webp",
        "original": "/img/spaces/gallery/utile-bench/slat-detail.webp",
        "width": 1500,
        "height": 2000,
        "caption": "Slats and cross support",
        "alt": "Close view of the wooden bench slats and the supporting cross member"
      }
    ]
  },
  {
    "id": "furniture",
    "shortTitle": "Oak Cubby",
    "title": "Oak Cubby",
    "description": "More cabinetry and joinery from the workshop.",
    "images": [
      {
        "src": "/img/spaces/gallery/furniture/IMG_2273.webp",
        "original": "/img/projects/furniture/IMG_2273.webp",
        "width": 1600,
        "height": 2133,
        "caption": "Wooden cabinetry",
        "alt": "A long wooden cabinet with open compartments on a workshop bench"
      },
      {
        "src": "/img/spaces/gallery/furniture/IMG_2274.webp",
        "original": "/img/projects/furniture/IMG_2274.webp",
        "width": 1600,
        "height": 1200,
        "caption": "Joinery detail",
        "alt": "A close-up of the intersecting wooden members of a furniture assembly"
      }
    ],
    "year": "2026"
  },
  {
    "id": "gnarrboro",
    "shortTitle": "Gnarrboro",
    "title": "Gnarrboro",
    "year": "2015–2016",
    "description": "A community BMX ramp jam at Back Alley Bikes in Carrboro, North Carolina, built from discarded objects and salvaged materials.",
    "story": [
      {
        "title": "2015 · Built out of trash",
        "text": "The first jam began as an experiment: salvaged pallets and scrap wood from local dumpsters became a set of BMX ramps. Local artists and riders brought the space to life with paint, riding, and music."
      },
      {
        "title": "2016 · Built by a community",
        "text": "The second edition grew with a donated half pipe, a “paint your plywood” fundraiser, and a crowdfunding campaign that strengthened both the ramps and the community."
      }
    ],
    "images": [
      {
        "src": "/img/spaces/gallery/gnarrboro/carve.webp",
        "original": "/img/projects/gnarrboro/carve.jpg.webp",
        "width": 1200,
        "height": 800,
        "caption": "The ramps in use",
        "alt": "A BMX rider carving a painted wooden ramp beneath trees at Gnarrboro"
      },
      {
        "src": "/img/spaces/gallery/gnarrboro/gnarrboro1_flyer.webp",
        "original": "/img/projects/gnarrboro/gnarrboro1_flyer.gif.webp",
        "width": 1200,
        "height": 1846,
        "caption": "2015 event flyer",
        "alt": "Illustrated flyer for the first Gnarrboro Ramp Jam at Back Alley Bikes"
      },
      {
        "src": "/img/spaces/gallery/gnarrboro/gnarrboro2_flyer.webp",
        "original": "/img/projects/gnarrboro/gnarrboro2_flyer.gif.webp",
        "width": 1294,
        "height": 2000,
        "caption": "2016 event flyer",
        "alt": "Black and white Gnarrboro 2 event flyer"
      },
      {
        "src": "/img/spaces/gallery/gnarrboro/band.webp",
        "original": "/img/projects/gnarrboro/band.jpg.webp",
        "width": 1000,
        "height": 667,
        "caption": "Bikes, music, and community",
        "alt": "Musicians and BMX riders gathered beside the outdoor ramps"
      },
      {
        "src": "/img/spaces/gallery/gnarrboro/hangs.webp",
        "original": "/img/projects/gnarrboro/hangs.jpg.webp",
        "width": 1000,
        "height": 668,
        "caption": "Between rides",
        "alt": "Two participants relaxing beside the ramps at Back Alley Bikes"
      },
      {
        "src": "/img/spaces/gallery/gnarrboro/carjump.webp",
        "original": "/img/projects/gnarrboro/carjump.jpg.webp",
        "width": 1000,
        "height": 668,
        "caption": "The car jump · Photo by Steve Crandall",
        "alt": "A BMX rider jumping over a car beside a ramp made from wooden pallets"
      },
      {
        "src": "/img/spaces/gallery/gnarrboro/toothpick.webp",
        "original": "/img/projects/gnarrboro/toothpick.jpg.webp",
        "width": 1000,
        "height": 668,
        "caption": "On the coping · Photo by Steve Crandall",
        "alt": "A BMX rider balancing at the top of a painted ramp"
      },
      {
        "src": "/img/spaces/gallery/gnarrboro/table.webp",
        "original": "/img/projects/gnarrboro/table.jpg.webp",
        "width": 1600,
        "height": 1200,
        "caption": "Above the ramps",
        "alt": "A BMX rider performing an aerial trick above the Gnarrboro ramps"
      },
      {
        "src": "/img/spaces/gallery/gnarrboro/flair.webp",
        "original": "/img/projects/gnarrboro/flair.jpg.webp",
        "width": 1600,
        "height": 1200,
        "caption": "2015 ramp jam · Photo by Adam Balfour",
        "alt": "A BMX rider airborne above the salvaged-material ramps at Back Alley Bikes"
      }
    ],
    "filmLinks": [
      {
        "label": "Watch the 2015 film on Vimeo",
        "url": "https://vimeo.com/130455113",
        "credit": "Film by Julia Wall"
      },
      {
        "label": "Watch the 2016 film on YouTube",
        "url": "https://youtu.be/jeP27ufIv3s",
        "credit": "Video by Zach Rogers and Steve Crandall"
      }
    ],
    "credits": [
      {
        "name": "Alex Bloom",
        "role": "Co-inventor, designer, promoter, and unofficial construction foreman"
      },
      {
        "name": "Neal Cart",
        "role": "Co-inventor and builder"
      },
      {
        "name": "Back Alley Bikes",
        "role": "Event location and community partner"
      },
      {
        "name": "Builders & artists",
        "role": "Adam Balfour, Jay Benallal, Darren Bouldin, Cole Brisson, David Bryan, Tony Davis, Richard Jackson, Todd Nichols, Cody Moore, Leigh Ramsdell, John Rogers, Jared Whalen, and Joel Wood."
      }
    ]
  },
  {
    "id": "entertainment-console",
    "shortTitle": "Roledenza",
    "title": "Roledenza",
    "description": "A low rolling console with perforated white fronts, open storage for audio equipment, and orange casters.",
    "images": [
      {
        "src": "/img/spaces/gallery/entertainment-console/console-installed.webp",
        "original": "/img/spaces/gallery/entertainment-console/console-installed.webp",
        "width": 1280,
        "height": 960,
        "caption": "Entertainment console in place",
        "alt": "Low wooden entertainment console on orange casters with perforated white fronts and a central stereo receiver"
      }
    ],
    "year": "2023"
  },
  {
    "id": "camper-van",
    "shortTitle": "The Thrillderness Express",
    "title": "The Thrillderness Express",
    "description": "A camper van conversion with wood paneling, a slatted bench platform, built-in shelving, and pull-out storage for bikes and gear.",
    "images": [
      {
        "src": "/img/spaces/gallery/camper-van/rear-storage-overview.webp",
        "original": "/img/spaces/gallery/camper-van/rear-storage-overview.webp",
        "width": 1500,
        "height": 2000,
        "caption": "Rear storage layout",
        "alt": "Camper van viewed through the rear doors with two bikes on a sliding tray and open storage beside it",
        "group": "Bike & gear storage"
      },
      {
        "src": "/img/spaces/gallery/camper-van/floor-preparation.webp",
        "original": "/img/spaces/gallery/camper-van/floor-preparation.webp",
        "width": 1500,
        "height": 2000,
        "caption": "Preparing the floor",
        "alt": "Strips fitted along the ribs of the bare metal van floor before the subfloor installation",
        "group": "Floor & preparation"
      },
      {
        "src": "/img/spaces/gallery/camper-van/subfloor-fitting.webp",
        "original": "/img/spaces/gallery/camper-van/subfloor-fitting.webp",
        "width": 1500,
        "height": 2000,
        "caption": "Fitting the subfloor",
        "alt": "Shaped plywood floor panels laid inside the van around the wheel wells",
        "group": "Floor & preparation"
      },
      {
        "src": "/img/spaces/gallery/camper-van/wall-battens.webp",
        "original": "/img/spaces/gallery/camper-van/wall-battens.webp",
        "width": 1280,
        "height": 960,
        "caption": "Preparing the walls",
        "alt": "Wooden battens attached to the van wall ribs between foil-faced sound-deadening panels",
        "group": "Floor & preparation"
      },
      {
        "src": "/img/spaces/gallery/camper-van/floor-installed.webp",
        "original": "/img/spaces/gallery/camper-van/floor-installed.webp",
        "width": 1500,
        "height": 2000,
        "caption": "The floor, installed",
        "alt": "New wood-look floor fitted inside the stripped van with exposed wall ribs and insulated wheel wells",
        "group": "Floor & preparation"
      },
      {
        "src": "/img/spaces/gallery/camper-van/interior-build-progress.webp",
        "original": "/img/spaces/gallery/camper-van/interior-build-progress.webp",
        "width": 1500,
        "height": 2000,
        "caption": "Interior build in progress",
        "alt": "Van interior with wooden wall paneling, a fitted floor, and a wooden frame under construction",
        "group": "Paneling & bench"
      },
      {
        "src": "/img/spaces/gallery/camper-van/bench-frame-assembly.webp",
        "original": "/img/spaces/gallery/camper-van/bench-frame-assembly.webp",
        "width": 1280,
        "height": 960,
        "caption": "Assembling the bench frame",
        "alt": "Long slatted wooden bench frame assembled outside the van",
        "group": "Paneling & bench"
      },
      {
        "src": "/img/spaces/gallery/camper-van/paneling-and-bench.webp",
        "original": "/img/spaces/gallery/camper-van/paneling-and-bench.webp",
        "width": 1500,
        "height": 2000,
        "caption": "Fitting the bench and wall paneling",
        "alt": "Slatted bench frame fitted beside horizontal wooden wall paneling with the ceiling framing exposed",
        "group": "Paneling & bench"
      },
      {
        "src": "/img/spaces/gallery/camper-van/bench-platform.webp",
        "original": "/img/spaces/gallery/camper-van/bench-platform.webp",
        "width": 1280,
        "height": 960,
        "caption": "Building the bench platform",
        "alt": "Slatted wooden bench platform under construction inside a wood-paneled camper van",
        "group": "Paneling & bench"
      },
      {
        "src": "/img/spaces/gallery/camper-van/pull-out-drawer.webp",
        "original": "/img/spaces/gallery/camper-van/pull-out-drawer.webp",
        "width": 1500,
        "height": 2000,
        "caption": "Building the pull-out storage",
        "alt": "Long plywood drawer extended through the rear doors during installation",
        "group": "Bike & gear storage"
      },
      {
        "src": "/img/spaces/gallery/camper-van/sliding-bike-tray.webp",
        "original": "/img/spaces/gallery/camper-van/sliding-bike-tray.webp",
        "width": 1500,
        "height": 2000,
        "caption": "Sliding bike tray",
        "alt": "Two mountain bikes mounted by their forks on a plywood pull-out tray between built-in shelves",
        "group": "Bike & gear storage"
      }
    ],
    "year": "2021"
  }
];
