# CORDSA Official Website Repository

This is the official repository for the CORDSA (Canadian Organization for Rare Disease Student Association) website.

Designed and developed by: [Angela Dakay](https://github.com/angelcache)

## Editing Content

Content for the website is stored in the `src/data/` folder.

- Team members: `src/data/team/2025-2026/team-info.tsx`
- Articles: `src/data/team/articles-info.tsx`
- Events: `src/data/team/events-info.tsx`

### Adding a new entry
1. Open the relevant file.
2. Copy the format of an existing entry.
3. Paste it below and replace the details.
4. Save the file.

### Deleting an entry
Remove the entry block from the corresponding file and save.

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
