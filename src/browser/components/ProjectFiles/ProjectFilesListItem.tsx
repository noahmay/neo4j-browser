/*
 * Copyright (c) "Neo4j"
 * Neo4j Sweden AB [http://neo4j.com]
 *
 * This file is part of Neo4j.
 *
 * Neo4j is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
import React, { useState } from 'react'
import {
  RemoveButton,
  RedRemoveButton,
  RunButton
} from '../SavedScripts/SavedScriptsButton'
import {
  SavedScriptsButtonWrapper,
  SavedScriptsListItemDisplayName,
  SavedScriptsListItemMain
} from '../SavedScripts/styled'
import { ProjectFileScript } from './ProjectFilesList'

interface ProjectFilesListItemProps {
  script: ProjectFileScript
  selectScript: (script: ProjectFileScript) => void
  removeScript: (script: ProjectFileScript) => void
  execScript: (cmd: string) => void
}

function ProjectFilesListItem({
  script,
  selectScript,
  execScript,
  removeScript
}: ProjectFilesListItemProps): JSX.Element {
  const [isEditing, setIsEditing] = useState(false)
  return (
    <SavedScriptsListItemMain className="saved-scripts-list-item">
      <SavedScriptsListItemDisplayName
        className="saved-scripts-list-item__display-name"
        data-testid={`scriptTitle-${script.filename}`}
        onClick={() => selectScript(script)}
      >
        {script.filename}
      </SavedScriptsListItemDisplayName>
      <SavedScriptsButtonWrapper className="saved-scripts__button-wrapper">
        {isEditing ? (
          <RedRemoveButton onClick={() => removeScript(script)} />
        ) : (
          <RemoveButton onClick={() => setIsEditing(true)} />
        )}
        <RunButton onClick={() => script.content.then(execScript)} />
      </SavedScriptsButtonWrapper>
    </SavedScriptsListItemMain>
  )
}

export default ProjectFilesListItem