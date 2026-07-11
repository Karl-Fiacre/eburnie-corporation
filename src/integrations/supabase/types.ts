export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      admin_audit_log: {
        Row: {
          action: string
          created_at: string
          id: string
          new_data: Json | null
          old_data: Json | null
          record_id: string | null
          summary: string | null
          table_name: string
          user_email: string | null
          user_id: string | null
        }
        Insert: {
          action: string
          created_at?: string
          id?: string
          new_data?: Json | null
          old_data?: Json | null
          record_id?: string | null
          summary?: string | null
          table_name: string
          user_email?: string | null
          user_id?: string | null
        }
        Update: {
          action?: string
          created_at?: string
          id?: string
          new_data?: Json | null
          old_data?: Json | null
          record_id?: string | null
          summary?: string | null
          table_name?: string
          user_email?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      ai_conversations: {
        Row: {
          created_at: string
          id: string
          last_message_at: string
          lead_qualified: boolean
          message_count: number
          messages: Json
          session_id: string
          updated_at: string
          visitor_meta: Json | null
        }
        Insert: {
          created_at?: string
          id?: string
          last_message_at?: string
          lead_qualified?: boolean
          message_count?: number
          messages?: Json
          session_id: string
          updated_at?: string
          visitor_meta?: Json | null
        }
        Update: {
          created_at?: string
          id?: string
          last_message_at?: string
          lead_qualified?: boolean
          message_count?: number
          messages?: Json
          session_id?: string
          updated_at?: string
          visitor_meta?: Json | null
        }
        Relationships: []
      }
      blocked_dates_event: {
        Row: {
          blocked_date: string
          created_at: string
          id: string
          reason: string | null
        }
        Insert: {
          blocked_date: string
          created_at?: string
          id?: string
          reason?: string | null
        }
        Update: {
          blocked_date?: string
          created_at?: string
          id?: string
          reason?: string | null
        }
        Relationships: []
      }
      bookings_event: {
        Row: {
          admin_notes: string | null
          booking_date: string
          booking_type: Database["public"]["Enums"]["booking_type"]
          created_at: string
          email: string
          event_type: string | null
          full_name: string
          guest_count: number | null
          id: string
          message: string | null
          phone: string
          status: Database["public"]["Enums"]["booking_status"]
          time_slot: string | null
          updated_at: string
        }
        Insert: {
          admin_notes?: string | null
          booking_date: string
          booking_type: Database["public"]["Enums"]["booking_type"]
          created_at?: string
          email: string
          event_type?: string | null
          full_name: string
          guest_count?: number | null
          id?: string
          message?: string | null
          phone: string
          status?: Database["public"]["Enums"]["booking_status"]
          time_slot?: string | null
          updated_at?: string
        }
        Update: {
          admin_notes?: string | null
          booking_date?: string
          booking_type?: Database["public"]["Enums"]["booking_type"]
          created_at?: string
          email?: string
          event_type?: string | null
          full_name?: string
          guest_count?: number | null
          id?: string
          message?: string | null
          phone?: string
          status?: Database["public"]["Enums"]["booking_status"]
          time_slot?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      categories_Boutique: {
        Row: {
          created_at: string
          description: string | null
          display_order: number
          id: string
          image_url: string | null
          is_active: boolean
          name: string
          slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          display_order?: number
          id?: string
          image_url?: string | null
          is_active?: boolean
          name: string
          slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          display_order?: number
          id?: string
          image_url?: string | null
          is_active?: boolean
          name?: string
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      categories_china_deals: {
        Row: {
          created_at: string
          description: string | null
          display_order: number
          id: string
          image_url: string | null
          is_active: boolean
          name: string
          name_en: string | null
          slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          display_order?: number
          id?: string
          image_url?: string | null
          is_active?: boolean
          name: string
          name_en?: string | null
          slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          display_order?: number
          id?: string
          image_url?: string | null
          is_active?: boolean
          name?: string
          name_en?: string | null
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      contact_messages_Boutique: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
          status: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          status?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          status?: string
        }
        Relationships: []
      }
      contact_messages_cargo: {
        Row: {
          created_at: string
          email: string
          full_name: string
          id: string
          message: string
          phone: string | null
          status: Database["public"]["Enums"]["message_status"]
          subject: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          full_name: string
          id?: string
          message: string
          phone?: string | null
          status?: Database["public"]["Enums"]["message_status"]
          subject: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          message?: string
          phone?: string | null
          status?: Database["public"]["Enums"]["message_status"]
          subject?: string
          updated_at?: string
        }
        Relationships: []
      }
      cookie_consents: {
        Row: {
          analytics: boolean
          created_at: string
          essential: boolean
          id: string
          language: string | null
          marketing: boolean
          page_url: string | null
          preferences: boolean
          user_agent: string | null
          user_id: string | null
          version: string
          visitor_id: string
        }
        Insert: {
          analytics?: boolean
          created_at?: string
          essential?: boolean
          id?: string
          language?: string | null
          marketing?: boolean
          page_url?: string | null
          preferences?: boolean
          user_agent?: string | null
          user_id?: string | null
          version?: string
          visitor_id: string
        }
        Update: {
          analytics?: boolean
          created_at?: string
          essential?: boolean
          id?: string
          language?: string | null
          marketing?: boolean
          page_url?: string | null
          preferences?: boolean
          user_agent?: string | null
          user_id?: string | null
          version?: string
          visitor_id?: string
        }
        Relationships: []
      }
      estimations_cargo: {
        Row: {
          created_at: string
          destination: string
          email: string
          estimated_price: number | null
          full_name: string
          id: string
          is_prohibited: boolean
          origin: string
          phone: string
          product_description: string | null
          product_type: string | null
          status: Database["public"]["Enums"]["estimation_status"]
          transport_mode: Database["public"]["Enums"]["transport_mode"]
          updated_at: string
          user_id: string | null
          volume: number | null
          weight: number | null
        }
        Insert: {
          created_at?: string
          destination?: string
          email: string
          estimated_price?: number | null
          full_name: string
          id?: string
          is_prohibited?: boolean
          origin?: string
          phone: string
          product_description?: string | null
          product_type?: string | null
          status?: Database["public"]["Enums"]["estimation_status"]
          transport_mode?: Database["public"]["Enums"]["transport_mode"]
          updated_at?: string
          user_id?: string | null
          volume?: number | null
          weight?: number | null
        }
        Update: {
          created_at?: string
          destination?: string
          email?: string
          estimated_price?: number | null
          full_name?: string
          id?: string
          is_prohibited?: boolean
          origin?: string
          phone?: string
          product_description?: string | null
          product_type?: string | null
          status?: Database["public"]["Enums"]["estimation_status"]
          transport_mode?: Database["public"]["Enums"]["transport_mode"]
          updated_at?: string
          user_id?: string | null
          volume?: number | null
          weight?: number | null
        }
        Relationships: []
      }
      newsletter_subscribers_Boutique: {
        Row: {
          created_at: string
          email: string
          id: string
          is_active: boolean
          source: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          is_active?: boolean
          source?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          is_active?: boolean
          source?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      order_items: {
        Row: {
          created_at: string
          id: string
          order_id: string
          product_id: string | null
          product_image: string | null
          product_name: string
          product_slug: string | null
          quantity: number
          subtotal_xof: number
          supplier_link: string | null
          unit_price_xof: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          order_id: string
          product_id?: string | null
          product_image?: string | null
          product_name: string
          product_slug?: string | null
          quantity?: number
          subtotal_xof?: number
          supplier_link?: string | null
          unit_price_xof?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          order_id?: string
          product_id?: string | null
          product_image?: string | null
          product_name?: string
          product_slug?: string | null
          quantity?: number
          subtotal_xof?: number
          supplier_link?: string | null
          unit_price_xof?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products_china_deals"
            referencedColumns: ["id"]
          },
        ]
      }
      order_items_Boutique: {
        Row: {
          created_at: string
          id: string
          order_id: string
          product_id: string | null
          product_image: string | null
          product_name: string
          product_slug: string | null
          quantity: number
          subtotal_xof: number
          unit_price_xof: number
        }
        Insert: {
          created_at?: string
          id?: string
          order_id: string
          product_id?: string | null
          product_image?: string | null
          product_name: string
          product_slug?: string | null
          quantity?: number
          subtotal_xof?: number
          unit_price_xof?: number
        }
        Update: {
          created_at?: string
          id?: string
          order_id?: string
          product_id?: string | null
          product_image?: string | null
          product_name?: string
          product_slug?: string | null
          quantity?: number
          subtotal_xof?: number
          unit_price_xof?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_items_Boutique_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders_Boutique"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_Boutique_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products_Boutique"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          admin_notes: string | null
          created_at: string
          customer_email: string
          customer_name: string
          customer_phone: string
          id: string
          notes: string | null
          order_number: string
          payment_method: Database["public"]["Enums"]["payment_method"]
          shipping_address: string
          shipping_city: string
          shipping_cost_xof: number
          shipping_country: string
          status: Database["public"]["Enums"]["order_status"]
          subtotal_xof: number
          total_xof: number
          transport_mode: Database["public"]["Enums"]["transport_mode"]
          updated_at: string
          user_id: string | null
        }
        Insert: {
          admin_notes?: string | null
          created_at?: string
          customer_email: string
          customer_name: string
          customer_phone: string
          id?: string
          notes?: string | null
          order_number: string
          payment_method?: Database["public"]["Enums"]["payment_method"]
          shipping_address: string
          shipping_city: string
          shipping_cost_xof?: number
          shipping_country?: string
          status?: Database["public"]["Enums"]["order_status"]
          subtotal_xof?: number
          total_xof?: number
          transport_mode?: Database["public"]["Enums"]["transport_mode"]
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          admin_notes?: string | null
          created_at?: string
          customer_email?: string
          customer_name?: string
          customer_phone?: string
          id?: string
          notes?: string | null
          order_number?: string
          payment_method?: Database["public"]["Enums"]["payment_method"]
          shipping_address?: string
          shipping_city?: string
          shipping_cost_xof?: number
          shipping_country?: string
          status?: Database["public"]["Enums"]["order_status"]
          subtotal_xof?: number
          total_xof?: number
          transport_mode?: Database["public"]["Enums"]["transport_mode"]
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      orders_Boutique: {
        Row: {
          admin_notes: string | null
          contact_mode: Database["public"]["Enums"]["boutique_contact_mode"]
          created_at: string
          customer_address: string | null
          customer_city: string | null
          customer_email: string | null
          customer_name: string
          customer_phone: string
          id: string
          notes: string | null
          order_number: string
          status: Database["public"]["Enums"]["boutique_order_status"]
          subtotal_xof: number
          total_xof: number
          updated_at: string
          user_id: string | null
        }
        Insert: {
          admin_notes?: string | null
          contact_mode?: Database["public"]["Enums"]["boutique_contact_mode"]
          created_at?: string
          customer_address?: string | null
          customer_city?: string | null
          customer_email?: string | null
          customer_name: string
          customer_phone: string
          id?: string
          notes?: string | null
          order_number: string
          status?: Database["public"]["Enums"]["boutique_order_status"]
          subtotal_xof?: number
          total_xof?: number
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          admin_notes?: string | null
          contact_mode?: Database["public"]["Enums"]["boutique_contact_mode"]
          created_at?: string
          customer_address?: string | null
          customer_city?: string | null
          customer_email?: string | null
          customer_name?: string
          customer_phone?: string
          id?: string
          notes?: string | null
          order_number?: string
          status?: Database["public"]["Enums"]["boutique_order_status"]
          subtotal_xof?: number
          total_xof?: number
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      payments: {
        Row: {
          amount_xof: number
          created_at: string
          id: string
          method: Database["public"]["Enums"]["payment_method"]
          order_id: string
          paid_at: string | null
          reference: string | null
          status: Database["public"]["Enums"]["payment_status"]
          updated_at: string
        }
        Insert: {
          amount_xof?: number
          created_at?: string
          id?: string
          method?: Database["public"]["Enums"]["payment_method"]
          order_id: string
          paid_at?: string | null
          reference?: string | null
          status?: Database["public"]["Enums"]["payment_status"]
          updated_at?: string
        }
        Update: {
          amount_xof?: number
          created_at?: string
          id?: string
          method?: Database["public"]["Enums"]["payment_method"]
          order_id?: string
          paid_at?: string | null
          reference?: string | null
          status?: Database["public"]["Enums"]["payment_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "payments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      pricing_categories_cargo: {
        Row: {
          created_at: string
          delivery_days: number
          description: string | null
          icon_name: string | null
          id: string
          is_active: boolean
          label: string
          mode: Database["public"]["Enums"]["transport_mode"]
          price_xof: number
          sort_order: number
          tag: string | null
          unit: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          delivery_days?: number
          description?: string | null
          icon_name?: string | null
          id?: string
          is_active?: boolean
          label: string
          mode: Database["public"]["Enums"]["transport_mode"]
          price_xof: number
          sort_order?: number
          tag?: string | null
          unit?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          delivery_days?: number
          description?: string | null
          icon_name?: string | null
          id?: string
          is_active?: boolean
          label?: string
          mode?: Database["public"]["Enums"]["transport_mode"]
          price_xof?: number
          sort_order?: number
          tag?: string | null
          unit?: string
          updated_at?: string
        }
        Relationships: []
      }
      products_Boutique: {
        Row: {
          category_id: string | null
          created_at: string
          description: string | null
          display_order: number
          id: string
          images: string[]
          is_active: boolean
          is_featured: boolean
          is_new: boolean
          name: string
          popularity: number
          price_xof: number
          promo_price_xof: number | null
          short_description: string | null
          slug: string
          stock: number
          updated_at: string
        }
        Insert: {
          category_id?: string | null
          created_at?: string
          description?: string | null
          display_order?: number
          id?: string
          images?: string[]
          is_active?: boolean
          is_featured?: boolean
          is_new?: boolean
          name: string
          popularity?: number
          price_xof?: number
          promo_price_xof?: number | null
          short_description?: string | null
          slug: string
          stock?: number
          updated_at?: string
        }
        Update: {
          category_id?: string | null
          created_at?: string
          description?: string | null
          display_order?: number
          id?: string
          images?: string[]
          is_active?: boolean
          is_featured?: boolean
          is_new?: boolean
          name?: string
          popularity?: number
          price_xof?: number
          promo_price_xof?: number | null
          short_description?: string | null
          slug?: string
          stock?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "products_Boutique_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories_Boutique"
            referencedColumns: ["id"]
          },
        ]
      }
      products_china_deals: {
        Row: {
          category_id: string | null
          created_at: string
          delay_air: string | null
          delay_sea: string | null
          description: string | null
          description_en: string | null
          display_order: number
          featured: boolean
          id: string
          images: string[]
          is_active: boolean
          name: string
          name_en: string | null
          popularity: number
          price_xof: number
          shipping_air_xof: number
          shipping_sea_xof: number
          slug: string
          stock: number
          updated_at: string
          volume_m3: number | null
          weight_kg: number | null
        }
        Insert: {
          category_id?: string | null
          created_at?: string
          delay_air?: string | null
          delay_sea?: string | null
          description?: string | null
          description_en?: string | null
          display_order?: number
          featured?: boolean
          id?: string
          images?: string[]
          is_active?: boolean
          name: string
          name_en?: string | null
          popularity?: number
          price_xof?: number
          shipping_air_xof?: number
          shipping_sea_xof?: number
          slug: string
          stock?: number
          updated_at?: string
          volume_m3?: number | null
          weight_kg?: number | null
        }
        Update: {
          category_id?: string | null
          created_at?: string
          delay_air?: string | null
          delay_sea?: string | null
          description?: string | null
          description_en?: string | null
          display_order?: number
          featured?: boolean
          id?: string
          images?: string[]
          is_active?: boolean
          name?: string
          name_en?: string | null
          popularity?: number
          price_xof?: number
          shipping_air_xof?: number
          shipping_sea_xof?: number
          slug?: string
          stock?: number
          updated_at?: string
          volume_m3?: number | null
          weight_kg?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "products_china_deals_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories_china_deals"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles_Boutique: {
        Row: {
          address: string | null
          avatar_url: string | null
          city: string | null
          created_at: string
          display_name: string | null
          id: string
          phone: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          address?: string | null
          avatar_url?: string | null
          city?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          phone?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          address?: string | null
          avatar_url?: string | null
          city?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          phone?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles_cargo: {
        Row: {
          address: string | null
          avatar_url: string | null
          city: string | null
          country: string | null
          created_at: string
          display_name: string | null
          id: string
          phone: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          address?: string | null
          avatar_url?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          phone?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          address?: string | null
          avatar_url?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          phone?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles_china_deals: {
        Row: {
          address: string | null
          avatar_url: string | null
          city: string | null
          country: string | null
          created_at: string
          display_name: string | null
          id: string
          phone: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          address?: string | null
          avatar_url?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          phone?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          address?: string | null
          avatar_url?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          phone?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      prohibited_products_cargo: {
        Row: {
          category: string
          created_at: string
          description: string | null
          id: string
          keywords: string[] | null
          name: string
          regulation_reference: string | null
          severity: Database["public"]["Enums"]["severity_level"]
          updated_at: string
        }
        Insert: {
          category: string
          created_at?: string
          description?: string | null
          id?: string
          keywords?: string[] | null
          name: string
          regulation_reference?: string | null
          severity?: Database["public"]["Enums"]["severity_level"]
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string | null
          id?: string
          keywords?: string[] | null
          name?: string
          regulation_reference?: string | null
          severity?: Database["public"]["Enums"]["severity_level"]
          updated_at?: string
        }
        Relationships: []
      }
      promotions_Boutique: {
        Row: {
          code: string
          created_at: string
          description: string | null
          ends_at: string | null
          id: string
          is_active: boolean
          starts_at: string | null
          type: Database["public"]["Enums"]["boutique_promo_type"]
          updated_at: string
          value: number
        }
        Insert: {
          code: string
          created_at?: string
          description?: string | null
          ends_at?: string | null
          id?: string
          is_active?: boolean
          starts_at?: string | null
          type?: Database["public"]["Enums"]["boutique_promo_type"]
          updated_at?: string
          value?: number
        }
        Update: {
          code?: string
          created_at?: string
          description?: string | null
          ends_at?: string | null
          id?: string
          is_active?: boolean
          starts_at?: string | null
          type?: Database["public"]["Enums"]["boutique_promo_type"]
          updated_at?: string
          value?: number
        }
        Relationships: []
      }
      reviews_Boutique: {
        Row: {
          author_name: string | null
          comment: string | null
          created_at: string
          id: string
          is_approved: boolean
          product_id: string
          rating: number
          user_id: string | null
        }
        Insert: {
          author_name?: string | null
          comment?: string | null
          created_at?: string
          id?: string
          is_approved?: boolean
          product_id: string
          rating: number
          user_id?: string | null
        }
        Update: {
          author_name?: string | null
          comment?: string | null
          created_at?: string
          id?: string
          is_approved?: boolean
          product_id?: string
          rating?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reviews_Boutique_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products_Boutique"
            referencedColumns: ["id"]
          },
        ]
      }
      shipment_events_Boutique: {
        Row: {
          created_at: string
          description: string | null
          event_at: string
          id: string
          is_auto: boolean
          location: string | null
          shipment_id: string
          status: Database["public"]["Enums"]["boutique_shipment_status"]
        }
        Insert: {
          created_at?: string
          description?: string | null
          event_at?: string
          id?: string
          is_auto?: boolean
          location?: string | null
          shipment_id: string
          status: Database["public"]["Enums"]["boutique_shipment_status"]
        }
        Update: {
          created_at?: string
          description?: string | null
          event_at?: string
          id?: string
          is_auto?: boolean
          location?: string | null
          shipment_id?: string
          status?: Database["public"]["Enums"]["boutique_shipment_status"]
        }
        Relationships: [
          {
            foreignKeyName: "shipment_events_Boutique_shipment_id_fkey"
            columns: ["shipment_id"]
            isOneToOne: false
            referencedRelation: "shipments_Boutique"
            referencedColumns: ["id"]
          },
        ]
      }
      shipment_tracking_cargo: {
        Row: {
          created_at: string
          description: string | null
          event_timestamp: string
          id: string
          location: string | null
          shipment_id: string
          status: Database["public"]["Enums"]["shipment_status"]
        }
        Insert: {
          created_at?: string
          description?: string | null
          event_timestamp?: string
          id?: string
          location?: string | null
          shipment_id: string
          status: Database["public"]["Enums"]["shipment_status"]
        }
        Update: {
          created_at?: string
          description?: string | null
          event_timestamp?: string
          id?: string
          location?: string | null
          shipment_id?: string
          status?: Database["public"]["Enums"]["shipment_status"]
        }
        Relationships: [
          {
            foreignKeyName: "shipment_tracking_cargo_shipment_id_fkey"
            columns: ["shipment_id"]
            isOneToOne: false
            referencedRelation: "shipments_cargo"
            referencedColumns: ["id"]
          },
        ]
      }
      shipments_Boutique: {
        Row: {
          carrier: string | null
          created_at: string
          delivered_at: string | null
          estimated_delivery: string | null
          id: string
          notes: string | null
          order_id: string | null
          recipient_address: string | null
          recipient_city: string | null
          recipient_name: string
          recipient_phone: string
          shipped_at: string | null
          status: Database["public"]["Enums"]["boutique_shipment_status"]
          tracking_number: string
          updated_at: string
        }
        Insert: {
          carrier?: string | null
          created_at?: string
          delivered_at?: string | null
          estimated_delivery?: string | null
          id?: string
          notes?: string | null
          order_id?: string | null
          recipient_address?: string | null
          recipient_city?: string | null
          recipient_name: string
          recipient_phone: string
          shipped_at?: string | null
          status?: Database["public"]["Enums"]["boutique_shipment_status"]
          tracking_number: string
          updated_at?: string
        }
        Update: {
          carrier?: string | null
          created_at?: string
          delivered_at?: string | null
          estimated_delivery?: string | null
          id?: string
          notes?: string | null
          order_id?: string | null
          recipient_address?: string | null
          recipient_city?: string | null
          recipient_name?: string
          recipient_phone?: string
          shipped_at?: string | null
          status?: Database["public"]["Enums"]["boutique_shipment_status"]
          tracking_number?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "shipments_Boutique_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders_Boutique"
            referencedColumns: ["id"]
          },
        ]
      }
      shipments_cargo: {
        Row: {
          actual_delivery: string | null
          created_at: string
          declared_value: number | null
          destination: string
          estimated_delivery: string | null
          id: string
          images: string[]
          notes: string | null
          order_id: string | null
          origin: string
          recipient_name: string
          recipient_phone: string
          sender_email: string | null
          sender_name: string
          sender_phone: string | null
          status: Database["public"]["Enums"]["shipment_status"]
          tracking_number: string
          transport_mode: Database["public"]["Enums"]["transport_mode"]
          updated_at: string
          user_id: string | null
          volume: number | null
          weight: number | null
        }
        Insert: {
          actual_delivery?: string | null
          created_at?: string
          declared_value?: number | null
          destination?: string
          estimated_delivery?: string | null
          id?: string
          images?: string[]
          notes?: string | null
          order_id?: string | null
          origin?: string
          recipient_name: string
          recipient_phone: string
          sender_email?: string | null
          sender_name: string
          sender_phone?: string | null
          status?: Database["public"]["Enums"]["shipment_status"]
          tracking_number: string
          transport_mode?: Database["public"]["Enums"]["transport_mode"]
          updated_at?: string
          user_id?: string | null
          volume?: number | null
          weight?: number | null
        }
        Update: {
          actual_delivery?: string | null
          created_at?: string
          declared_value?: number | null
          destination?: string
          estimated_delivery?: string | null
          id?: string
          images?: string[]
          notes?: string | null
          order_id?: string | null
          origin?: string
          recipient_name?: string
          recipient_phone?: string
          sender_email?: string | null
          sender_name?: string
          sender_phone?: string | null
          status?: Database["public"]["Enums"]["shipment_status"]
          tracking_number?: string
          transport_mode?: Database["public"]["Enums"]["transport_mode"]
          updated_at?: string
          user_id?: string | null
          volume?: number | null
          weight?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shipments_cargo_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      simulations_auto: {
        Row: {
          budget_xof: number | null
          created_at: string
          customer_city: string | null
          customer_email: string | null
          customer_name: string
          customer_phone: string
          customs_xof: number
          desired_delay_days: number | null
          destination_port: string | null
          id: string
          insurance: boolean
          notes: string | null
          reference: string
          service_fee_xof: number
          shipping_mode: string
          shipping_xof: number
          status: string
          total_xof: number
          updated_at: string
          vat_xof: number
          vehicle_age: number
          vehicle_brand: string | null
          vehicle_fuel: string | null
          vehicle_model: string | null
          vehicle_price_xof: number
          vehicle_year: number | null
        }
        Insert: {
          budget_xof?: number | null
          created_at?: string
          customer_city?: string | null
          customer_email?: string | null
          customer_name: string
          customer_phone: string
          customs_xof: number
          desired_delay_days?: number | null
          destination_port?: string | null
          id?: string
          insurance?: boolean
          notes?: string | null
          reference: string
          service_fee_xof: number
          shipping_mode: string
          shipping_xof: number
          status?: string
          total_xof: number
          updated_at?: string
          vat_xof: number
          vehicle_age?: number
          vehicle_brand?: string | null
          vehicle_fuel?: string | null
          vehicle_model?: string | null
          vehicle_price_xof: number
          vehicle_year?: number | null
        }
        Update: {
          budget_xof?: number | null
          created_at?: string
          customer_city?: string | null
          customer_email?: string | null
          customer_name?: string
          customer_phone?: string
          customs_xof?: number
          desired_delay_days?: number | null
          destination_port?: string | null
          id?: string
          insurance?: boolean
          notes?: string | null
          reference?: string
          service_fee_xof?: number
          shipping_mode?: string
          shipping_xof?: number
          status?: string
          total_xof?: number
          updated_at?: string
          vat_xof?: number
          vehicle_age?: number
          vehicle_brand?: string | null
          vehicle_fuel?: string | null
          vehicle_model?: string | null
          vehicle_price_xof?: number
          vehicle_year?: number | null
        }
        Relationships: []
      }
      tracking_events_cargo: {
        Row: {
          created_at: string
          description: string | null
          event_date: string
          id: string
          is_auto: boolean
          location: string | null
          shipment_id: string
          status: Database["public"]["Enums"]["shipment_status"]
        }
        Insert: {
          created_at?: string
          description?: string | null
          event_date?: string
          id?: string
          is_auto?: boolean
          location?: string | null
          shipment_id: string
          status: Database["public"]["Enums"]["shipment_status"]
        }
        Update: {
          created_at?: string
          description?: string | null
          event_date?: string
          id?: string
          is_auto?: boolean
          location?: string | null
          shipment_id?: string
          status?: Database["public"]["Enums"]["shipment_status"]
        }
        Relationships: [
          {
            foreignKeyName: "tracking_events_cargo_shipment_id_fkey"
            columns: ["shipment_id"]
            isOneToOne: false
            referencedRelation: "shipments_cargo"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles_cargo: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      vehicles_auto: {
        Row: {
          brand: string
          created_at: string
          description: string
          display_order: number
          fuel: string
          highlights: string[]
          id: string
          image_url: string
          is_active: boolean
          model: string
          premium: boolean
          price: number
          priorities: string[]
          slug: string
          type: string
          updated_at: string
          usage: string[]
          year: number
        }
        Insert: {
          brand: string
          created_at?: string
          description: string
          display_order?: number
          fuel: string
          highlights?: string[]
          id?: string
          image_url: string
          is_active?: boolean
          model: string
          premium?: boolean
          price: number
          priorities?: string[]
          slug: string
          type: string
          updated_at?: string
          usage?: string[]
          year: number
        }
        Update: {
          brand?: string
          created_at?: string
          description?: string
          display_order?: number
          fuel?: string
          highlights?: string[]
          id?: string
          image_url?: string
          is_active?: boolean
          model?: string
          premium?: boolean
          price?: number
          priorities?: string[]
          slug?: string
          type?: string
          updated_at?: string
          usage?: string[]
          year?: number
        }
        Relationships: []
      }
      wishlist_Boutique: {
        Row: {
          created_at: string
          id: string
          product_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          product_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          product_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "wishlist_Boutique_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products_Boutique"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      create_boutique_order: {
        Args: {
          p_contact_mode: Database["public"]["Enums"]["boutique_contact_mode"]
          p_customer_address: string
          p_customer_city: string
          p_customer_email: string
          p_customer_name: string
          p_customer_phone: string
          p_items: Json
          p_notes: string
          p_subtotal_xof: number
          p_total_xof: number
        }
        Returns: Json
      }
      create_guest_order: {
        Args: {
          p_customer_email: string
          p_customer_name: string
          p_customer_phone: string
          p_items: Json
          p_notes: string
          p_order_number: string
          p_payment_method: Database["public"]["Enums"]["payment_method"]
          p_shipping_address: string
          p_shipping_city: string
          p_shipping_cost_xof: number
          p_shipping_country: string
          p_subtotal_xof: number
          p_total_xof: number
          p_transport_mode: Database["public"]["Enums"]["transport_mode"]
        }
        Returns: string
      }
      create_shipment_request: {
        Args: {
          p_declared_price: number
          p_description: string
          p_instructions: string
          p_parcel_type: string
          p_recipient_address: string
          p_recipient_city: string
          p_recipient_name: string
          p_recipient_phone: string
          p_sender_email: string
          p_sender_name: string
          p_sender_phone: string
          p_transport_mode: Database["public"]["Enums"]["transport_mode"]
          p_volume: number
          p_weight: number
        }
        Returns: Json
      }
      create_simulation_auto: {
        Args: {
          p_budget_xof: number
          p_customer_city: string
          p_customer_email: string
          p_customer_name: string
          p_customer_phone: string
          p_customs_xof: number
          p_desired_delay_days: number
          p_destination_port: string
          p_insurance: boolean
          p_notes: string
          p_service_fee_xof: number
          p_shipping_mode: string
          p_shipping_xof: number
          p_total_xof: number
          p_vat_xof: number
          p_vehicle_age: number
          p_vehicle_brand: string
          p_vehicle_fuel: string
          p_vehicle_model: string
          p_vehicle_price_xof: number
          p_vehicle_year: number
        }
        Returns: Json
      }
      gen_boutique_tracking_number: { Args: never; Returns: string }
      gen_tracking_number: { Args: never; Returns: string }
      get_boutique_shipment: { Args: { p_tracking: string }; Returns: Json }
      get_order_by_number: { Args: { p_order_number: string }; Returns: Json }
      get_shipments_by_contact: {
        Args: { p_contact: string }
        Returns: {
          actual_delivery: string
          created_at: string
          destination: string
          estimated_delivery: string
          origin: string
          recipient_name: string
          recipient_phone: string
          status: Database["public"]["Enums"]["shipment_status"]
          tracking_number: string
          transport_mode: Database["public"]["Enums"]["transport_mode"]
          volume: number
          weight: number
        }[]
      }
      get_taken_slots: {
        Args: { _date: string }
        Returns: {
          booking_type: Database["public"]["Enums"]["booking_type"]
          time_slot: string
        }[]
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      upsert_ai_conversation: {
        Args: {
          p_lead_qualified?: boolean
          p_messages: Json
          p_session_id: string
          p_visitor_meta?: Json
        }
        Returns: string
      }
      validate_order: { Args: { p_order_id: string }; Returns: Json }
    }
    Enums: {
      app_role: "admin" | "agent" | "client"
      booking_status: "pending" | "confirmed" | "cancelled" | "completed"
      booking_type: "consultation" | "event"
      boutique_contact_mode: "whatsapp" | "phone" | "email"
      boutique_order_status:
        | "pending"
        | "contacted"
        | "confirmed"
        | "processing"
        | "ready"
        | "delivered"
        | "cancelled"
      boutique_promo_type: "percent" | "fixed"
      boutique_shipment_status:
        | "preparation"
        | "en_livraison"
        | "livre"
        | "annule"
      estimation_status: "pending" | "approved" | "rejected" | "converted"
      message_status: "new" | "read" | "replied" | "archived"
      order_status:
        | "pending"
        | "paid"
        | "processing"
        | "purchased"
        | "shipped"
        | "delivered"
        | "cancelled"
      payment_method: "mobile_money" | "card" | "cash" | "paypal"
      payment_status: "pending" | "completed" | "failed" | "refunded"
      severity_level: "low" | "medium" | "high" | "critical"
      shipment_status:
        | "pending"
        | "received_china"
        | "in_transit"
        | "arrived_ci"
        | "out_for_delivery"
        | "delivered"
        | "cancelled"
      transport_mode: "air" | "sea" | "road"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "agent", "client"],
      booking_status: ["pending", "confirmed", "cancelled", "completed"],
      booking_type: ["consultation", "event"],
      boutique_contact_mode: ["whatsapp", "phone", "email"],
      boutique_order_status: [
        "pending",
        "contacted",
        "confirmed",
        "processing",
        "ready",
        "delivered",
        "cancelled",
      ],
      boutique_promo_type: ["percent", "fixed"],
      boutique_shipment_status: [
        "preparation",
        "en_livraison",
        "livre",
        "annule",
      ],
      estimation_status: ["pending", "approved", "rejected", "converted"],
      message_status: ["new", "read", "replied", "archived"],
      order_status: [
        "pending",
        "paid",
        "processing",
        "purchased",
        "shipped",
        "delivered",
        "cancelled",
      ],
      payment_method: ["mobile_money", "card", "cash", "paypal"],
      payment_status: ["pending", "completed", "failed", "refunded"],
      severity_level: ["low", "medium", "high", "critical"],
      shipment_status: [
        "pending",
        "received_china",
        "in_transit",
        "arrived_ci",
        "out_for_delivery",
        "delivered",
        "cancelled",
      ],
      transport_mode: ["air", "sea", "road"],
    },
  },
} as const
