import React from 'react';
import Table from "../../components/table";
import HeroCard from "../../components/hero-card";

function PageTable(
  {
    heroes,
    history,
    isMobile,
    selectHandler,
  }) {

  const columns = [
    {
      label: isMobile ? 'Nome' : 'Personagem',
      renderFunction: (data) => <HeroCard image={`${data.thumbnail.path}.${data.thumbnail.extension}`}
        name={data.name} />,
    },
    {
      label: 'Séries',
      renderFunction: (data) => data.series.items.slice(0, 3).map(serie => <div key={serie.name}
        className="color-black roboto-regular">{serie.name.substring(0, 24)}</div>),
    },
    {
      label: 'Eventos',
      renderFunction: (data) => data.events.items.slice(0, 3).map(event => <div key={event.name}
        className="color-black roboto-regular">{event.name.substring(0, 24)}</div>),
    },
  ];

  if (isMobile) {
    delete columns[1];
    delete columns[2];
  }

  return (
    <Table isMobile={isMobile} columns={columns} registers={heroes} onRowClick={(data) => { selectHandler(data); history.push('/code-hero/details') }} />
  )
}

export default PageTable;
