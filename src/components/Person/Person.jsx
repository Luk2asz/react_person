/* eslint-disable react/jsx-one-expression-per-line */
export const Person = ({ person }) => {
  if (person.sex === 'f') {
    return (
      <section className="Person">
        <h2 className="Person__name">My name is {person.name}</h2>
        {typeof (person.age) === 'number'
          ? <p className="Person__age">I am {person.age}</p>
          : null
        }
        {person.isMarried
          ? (
            <p className="Person__partner">
              {person.partnerName} is my husband
            </p>
          )
          : <p className="Person__partner">I am not married</p>
        }
      </section>
    );
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {typeof (person.age) === 'number'
        ? <p className="Person__age">I am {person.age}</p>
        : null
      }
      {person.isMarried
        ? (
          <p className="Person__partner">
            {person.partnerName} is my wife
          </p>
        )
        : <p className="Person__partner">I am not married</p>
        }
    </section>
  );
};
