import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { useQuery, UseQueryResult } from 'react-query';
import styles from './ItemDetails.module.css';
import ApiEndpoints from '../../models/api.enums';
import { Recipe } from '../../models/interfaces';

const fetchRecipe = async (id: number): Promise<Recipe | undefined> => {
    const response = await fetch(ApiEndpoints.RECIPES);
    const data = await response.json();
    return data.recipes.find((recipe: any) => recipe.id === id);
  };

const useRecipe = (id: number): UseQueryResult<Recipe | undefined> => {
  return useQuery(['recipe', id], () => fetchRecipe(id));
};

function ItemDetails() {
  const { id } = useParams();
  const { data, error, isLoading } = useRecipe(Number(id));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error instanceof Error ? error.message : 'Unknown error'}</div>;
  if (!data) return <div>Recipe not found</div>;

  return (
   
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <h2 className={styles.title}>{data.name}</h2>
          <h3 className={styles.subtitle}></h3>
          <p className={styles.instructionsParagraph}>
            {data.instructions.join(' ')}
          </p>
          <h3 className={styles.subtitle}>Ingredients</h3>
          <hr className={styles.separator} />
          <div className={styles.ingredients}>
  {data.ingredients.map((ingredient, index) => (
    <div key={index} className={styles.ingredient}>
      <FontAwesomeIcon icon={faCheckCircle} color="#2ecc71" style={{ marginRight: 8 }} />
      {ingredient}
    </div>
  ))}
</div>
        </div>
        <div className={styles.rightContainer}>
          <img src={data.image} alt={data.name} className={styles.image} />
        </div>
      </div>
  );
}

export default ItemDetails;