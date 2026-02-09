import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { blogPosts } from "@/lib/data";

export function BlogSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
              Blogs
            </h2>
            <p className="text-muted-foreground">
              Últimas noticias y tendencias tecnológicas
            </p>
          </div>
          <Button variant="ghost" className="hidden text-primary md:flex" asChild>
            <Link href="#">
              Ver todos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Blog grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="group overflow-hidden border-border/50 bg-card/50 transition-all hover:border-primary/50"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  <Badge className="absolute left-4 top-4 bg-primary text-primary-foreground">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-5">
                  <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground transition-colors group-hover:text-primary line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" asChild>
            <Link href="#">
              Ver todos los artículos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Dots indicator */}
        <div className="mt-8 flex justify-center gap-2">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === 0
                  ? "w-8 bg-primary"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Ir a página ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
