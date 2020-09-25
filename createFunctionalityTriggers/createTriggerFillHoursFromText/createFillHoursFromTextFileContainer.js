import createContainer from './script.js';
import createColumn from './script.js';
import createDropTextFileLabel from './script.js';
import createDropTextFileButton from './script.js';
import createBottomLabel from './script.js';
import { arrowGraphic, chartIcon, fillIcon, underLineGraphic } from './script.js';

function createTriggerFillHoursFromTextFile() {
  const column = createColumn();
  const container = createContainer();
  const dropTextFileButton = createDropTextFileButton();
  const dropTextFileLabel = createDropTextFileLabel();
  const bottomLabel = createBottomLabel();

  column.appendChild(dropTextFileButton);
  column.appendChild(dropTextFileLabel);
  column.appendChild(fillIcon)
  column.appendChild(bottomLabel);
  column.appendChild(underLineGraphic);

  container.appendChild(column);
  container.appendChild(arrowGraphic);
  container.appendChild(chartIcon);

  return container;
}

export default createTriggerFillHoursFromTextFile;