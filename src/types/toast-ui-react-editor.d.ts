declare module '@toast-ui/react-editor' {
    import { ComponentType } from 'react';
  
    export interface EditorProps {
      height?: string;
      initialValue?: string;
      previewStyle?: 'tab' | 'vertical';
      initialEditType?: 'markdown' | 'wysiwyg';
      useCommandShortcut?: boolean;
      onChange?: () => void;
      usageStatistics?: boolean;
      toolbarItems?: string[][];
      language?: string;
      hooks?: {
        addImageBlobHook?: (blob: Blob, callback: (url: string, altText: string) => void) => void;
      };
      hideModeSwitch?: boolean;
      placeholder?: string;
      autofocus?: boolean;
      plugins?: Array<any>;
    }
  
    export interface ViewerProps {
      initialValue: string;
      height?: string;
      usageStatistics?: boolean;
      plugins?: Array<any>;
    }
  
    export const Editor: ComponentType<EditorProps>;
    export const Viewer: ComponentType<ViewerProps>;
  }