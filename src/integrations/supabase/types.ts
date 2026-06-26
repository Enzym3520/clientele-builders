export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export type Database = {
  public: {
    Tables: {
      cb_posts: {
        Row: {
          id: string;
          title: string | null;
          slug: string | null;
          dek: string | null;
          body_html: string | null;
          cover_image_url: string | null;
          hero_image_url: string | null;
          is_published: boolean | null;
          is_featured: boolean | null;
          category_id: string | null;
          cta_text: string | null;
          cta_url: string | null;
          author_name: string | null;
          author_role: string | null;
          meta_title: string | null;
          meta_description: string | null;
          og_title: string | null;
          og_description: string | null;
          og_image_url: string | null;
          reading_time: number | null;
          publish_date: string | null;
          created_at: string | null;
          updated_at: string | null;
        };
        Insert: Omit<Database['public']['Tables']['cb_posts']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['cb_posts']['Insert']>;
        Relationships: [];
      };
      cb_categories: {
        Row: { id: string; name: string; slug: string | null; description: string | null; created_at: string | null };
        Insert: Omit<Database['public']['Tables']['cb_categories']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['cb_categories']['Insert']>;
        Relationships: [];
      };
      cb_tags: {
        Row: { id: string; name: string; slug: string | null; created_at: string | null };
        Insert: Omit<Database['public']['Tables']['cb_tags']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['cb_tags']['Insert']>;
        Relationships: [];
      };
      cb_post_tags: {
        Row: { id: string; post_id: string; tag_id: string };
        Insert: Omit<Database['public']['Tables']['cb_post_tags']['Row'], 'id'>;
        Update: Partial<Database['public']['Tables']['cb_post_tags']['Insert']>;
        Relationships: [];
      };
      cb_home_content: {
        Row: { id: string; content: Json; is_published: boolean | null; updated_by: string | null; updated_at: string | null };
        Insert: Omit<Database['public']['Tables']['cb_home_content']['Row'], 'id'>;
        Update: Partial<Database['public']['Tables']['cb_home_content']['Insert']>;
        Relationships: [];
      };
      user_roles: {
        Row: { id: string; user_id: string; role: string };
        Insert: Omit<Database['public']['Tables']['user_roles']['Row'], 'id'>;
        Update: Partial<Database['public']['Tables']['user_roles']['Insert']>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
