# CORDSA Official Website Repository

This is the official repository for the CORDSA (Canadian Organization for Rare Disease Student Association) website.

Designed and developed by: [Angela Dakay](https://github.com/angelcache)

## Project Structure

Content for the website is stored in the `src/data/` folder. These files can be edited directly to update the site:

- Team members: `src/data/team/2025-2026/team-info.tsx`
- Articles: `src/data/articles-info.tsx`
- Events:  
  - Upcoming events: `src/data/upcoming-events-info.tsx`  
  - Past events: `src/data/past-events-info.tsx`

Each file contains an array of entries. Editing them updates what is displayed on the site.

## Editing Content

### Adding a new entry
1. Open the relevant data file.
2. Copy an existing entry block (`{ ... },`).
3. Paste it below the last entry.
4. Update the fields
   - Team: `image`, `name`, `role`  
   - Articles: `image`, `name`, `date`, `link`  
   - Upcoming events: `name`, `info`, `image`  
   - Past events: `name`, `info`, `image`

### Editing an entry
- Open the file and update the text, date, or image inside the block.

### Deleting an entry
- Remove the entire block (`{ ... },`) from the file and save.

## Media and Assets

All images used on the website are stored in the `src/assets/img/` folder.  
Each type of content has its own subfolder:

- **Team member images** → `src/assets/img/team/2025-2026/`  
  - Example import:  
    ```ts
    import Dana from "../../../assets/img/team/2025-2026/dana.png";
    ```

- **Article images** → `src/assets/img/photos/resources/`  
  - Example import:  
    ```ts
    import csa from "../assets/img/photos/resources/csa.png";
    ```

- **Upcoming event images** → `src/assets/img/photos/events/`  
  - Example import:  
    ```ts
    import schoolBash from "../assets/img/photos/events/school-bash.png";
    ```

- **Past event images** → `src/assets/img/photos/past-events/`  
  - Example import:  
    ```ts
    import gala2025 from "../assets/img/photos/past-events/gala-2025.png";
    ```

When adding new content:
1. Place the image in the correct subfolder.  
2. Add a new import statement at the top of the relevant data file.  
3. Reference the imported image inside the new entry block.


## Development Setup

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/cordsa/website.git
   cd website

2. Install dependencies:
   ```bash
   npm install

4. Run the development server:
   ```bash
   npm run dev
   Open http://localhost:5173 in your browser to view the site.
