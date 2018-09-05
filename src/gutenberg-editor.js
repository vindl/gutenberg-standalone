import React, { Component } from 'react';

import apiFetch from '@wordpress/api-fetch';
import { dispatch } from '@wordpress/data';
import '@wordpress/core-data'; // Initializes core data store
import { registerCoreBlocks } from '@wordpress/block-library';
import {
	BlockList,
	CopyHandler,
	PostTitle,
	WritingFlow,
	ObserveTyping,
	EditorGlobalKeyboardShortcuts,
	EditorProvider,
	ErrorBoundary,
	BlockSelectionClearer,
	MultiSelectScrollIntoView,
} from '@wordpress/editor';

const editorSettings = {};

const post = {
	type: 'post',
	content: 'test content',
};

registerCoreBlocks();

// NO API support
apiFetch.use( () => {} );

dispatch( 'core/nux' ).disableTips();

class GutenbergEditor extends Component {
	render() {
		return (
			<div className="editor-container">
	            <EditorProvider settings={ editorSettings } post={ post }>
	                <ErrorBoundary onError={ () => {} }>
	                    <BlockSelectionClearer>
	                        <EditorGlobalKeyboardShortcuts />
	                        <CopyHandler />
	                        <MultiSelectScrollIntoView />
	                        <WritingFlow>
		                        <ObserveTyping>
			                        <PostTitle />
			                        <BlockList />
		                        </ObserveTyping>
	                        </WritingFlow>
	                    </BlockSelectionClearer>
	                </ErrorBoundary>
	            </EditorProvider>
			</div>
		);
	}
}

export default GutenbergEditor;
