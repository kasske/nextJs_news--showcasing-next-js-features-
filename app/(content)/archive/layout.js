export default function ArchiveLayout({ archive, latest }) {
  // paralel routing with @, then we can use this archive and latest as props (children for each paralel route)
  return (
    <div>
      <h1>News Archive</h1>
      <section id="archive-filter">{archive}</section>

      <section id="archive-latest">{latest}</section>
    </div>
  );
}
