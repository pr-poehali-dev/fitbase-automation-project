import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Icon name="Dumbbell" className="h-8 w-8 text-primary" />
              <span className="font-heading text-xl font-bold">Fitbase</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="text-primary border-primary">
              <Icon name="Zap" className="h-3 w-3 mr-1" />
              Live Demo
            </Badge>
            <Button size="sm">
              <Icon name="Play" className="h-4 w-4 mr-2" />
              Начать
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                <Icon name="Sparkles" className="h-3 w-3 mr-1" />
                Автоматизация записи
              </Badge>

              <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
                CRM для фитнес-студий
                <span className="text-primary"> нового уровня</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-lg">
                Забудьте о телефонных звонках и бумажных записях.
                Автоматизируйте запись клиентов, управляйте абонементами и
                анализируйте бизнес в одной системе.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  <Icon name="Rocket" className="h-4 w-4" />
                  Попробовать бесплатно
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Icon name="PlayCircle" className="h-4 w-4" />
                  Смотреть демо
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Icon
                    name="Star"
                    className="h-5 w-5 text-accent fill-accent"
                  />
                  <span className="text-sm font-medium">
                    4.9/5 от 200+ студий
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" className="h-5 w-5 text-secondary" />
                  <span className="text-sm font-medium">Запуск за 1 день</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl" />
              <img
                src="/img/ed98558d-d2d0-4543-ad52-e3cb0399535d.jpg"
                alt="Современная фитнес-студия"
                className="relative z-10 rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Solutions */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="bg-secondary/10 text-secondary mb-4">
              <Icon name="Target" className="h-3 w-3 mr-1" />
              Решения болевых точек
            </Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Проблемы, которые мы решаем
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждая функция создана для решения реальных проблем фитнес-студий
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Phone",
                title: "Автоматизация записи",
                problem: "Администратор перегружен звонками в час пик",
                solution: "Онлайн-запись 24/7 без участия персонала",
                impact: "Важность: 9/10",
                color: "primary",
              },
              {
                icon: "Bell",
                title: "Напоминания о занятиях",
                problem: "Забывают напомнить о первом занятии",
                solution: "Автоматические SMS и push-уведомления",
                impact: "Важность: 8/10",
                color: "secondary",
              },
              {
                icon: "Users",
                title: "Управление клиентской базой",
                problem: "Не помнят предпочтения и историю клиентов",
                solution: "Полная CRM с историей и персонализацией",
                impact: "Важность: 9/10",
                color: "accent",
              },
              {
                icon: "BarChart3",
                title: "Финансовый контроль",
                problem: "Неточный учет доходов и расходов",
                solution: "Автоматизированная отчетность в реальном времени",
                impact: "Важность: 10/10",
                color: "primary",
              },
              {
                icon: "Calendar",
                title: "Управление расписанием",
                problem: "Ошибки при обновлении расписания вручную",
                solution: "Автоматическое расписание с мобильным доступом",
                impact: "Важность: 8/10",
                color: "secondary",
              },
              {
                icon: "TrendingUp",
                title: "Аналитика и отчеты",
                problem: "Сложно собрать данные для принятия решений",
                solution: "Централизованная аналитика по всем показателям",
                impact: "Важность: 10/10",
                color: "accent",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-${item.color}/10`}>
                      <Icon
                        name={item.icon}
                        className={`h-5 w-5 text-${item.color}`}
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <Badge variant="outline" className="text-xs mt-1">
                        {item.impact}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-destructive/5 rounded-lg border-l-4 border-destructive/20">
                    <p className="text-sm text-destructive font-medium">
                      Боль:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.problem}
                    </p>
                  </div>
                  <div className="p-3 bg-primary/5 rounded-lg border-l-4 border-primary/20">
                    <p className="text-sm text-primary font-medium">Решение:</p>
                    <p className="text-sm text-muted-foreground">
                      {item.solution}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary mb-4">
              <Icon name="Monitor" className="h-3 w-3 mr-1" />
              Интерфейс системы
            </Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Панель управления
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Всё что нужно для управления студией в одном месте
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="dashboard" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="dashboard">Главная</TabsTrigger>
                <TabsTrigger value="booking">Запись</TabsTrigger>
                <TabsTrigger value="clients">Клиенты</TabsTrigger>
                <TabsTrigger value="analytics">Аналитика</TabsTrigger>
              </TabsList>

              <TabsContent value="dashboard" className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      title: "Записи сегодня",
                      value: "24",
                      change: "+12%",
                      icon: "Calendar",
                      color: "text-primary",
                    },
                    {
                      title: "Новые клиенты",
                      value: "8",
                      change: "+25%",
                      icon: "UserPlus",
                      color: "text-secondary",
                    },
                    {
                      title: "Доход за день",
                      value: "₽15,240",
                      change: "+8%",
                      icon: "TrendingUp",
                      color: "text-accent",
                    },
                    {
                      title: "Загрузка зала",
                      value: "87%",
                      change: "+15%",
                      icon: "Activity",
                      color: "text-primary",
                    },
                  ].map((stat, index) => (
                    <Card key={index} className="animate-pulse-slow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">
                              {stat.title}
                            </p>
                            <p className="text-2xl font-bold">{stat.value}</p>
                            <p className="text-xs text-primary font-medium">
                              {stat.change}
                            </p>
                          </div>
                          <Icon
                            name={stat.icon}
                            className={`h-8 w-8 ${stat.color}`}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="Clock" className="h-5 w-5" />
                        Сегодняшние занятия
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {[
                        {
                          time: "09:00",
                          class: "Йога для начинающих",
                          trainer: "Анна Петрова",
                          spots: "12/15",
                        },
                        {
                          time: "11:00",
                          class: "Силовая тренировка",
                          trainer: "Максим Волков",
                          spots: "8/12",
                        },
                        {
                          time: "18:00",
                          class: "Кроссфит",
                          trainer: "Дмитрий Соколов",
                          spots: "15/15",
                        },
                      ].map((class_, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse-slow" />
                            <div>
                              <p className="font-medium">
                                {class_.time} - {class_.class}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {class_.trainer}
                              </p>
                            </div>
                          </div>
                          <Badge variant="outline">{class_.spots}</Badge>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="TrendingUp" className="h-5 w-5" />
                        Загрузка по дням
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {[
                        { day: "Понедельник", value: 85 },
                        { day: "Вторник", value: 92 },
                        { day: "Среда", value: 78 },
                        { day: "Четверг", value: 88 },
                        { day: "Пятница", value: 95 },
                        { day: "Суббота", value: 82 },
                        { day: "Воскресенье", value: 65 },
                      ].map((day, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>{day.day}</span>
                            <span className="font-medium">{day.value}%</span>
                          </div>
                          <Progress value={day.value} className="h-2" />
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="booking" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="CalendarDays" className="h-5 w-5" />
                      Онлайн-запись клиентов
                    </CardTitle>
                    <CardDescription>
                      Клиенты могут записываться самостоятельно через сайт или
                      приложение
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-medium">Сегодня записались:</h3>
                        {[
                          {
                            name: "Мария Иванова",
                            time: "10:00",
                            class: "Йога",
                            status: "confirmed",
                          },
                          {
                            name: "Алексей Смирнов",
                            time: "14:30",
                            class: "Тренажёры",
                            status: "pending",
                          },
                          {
                            name: "Елена Козлова",
                            time: "19:00",
                            class: "Пилатес",
                            status: "confirmed",
                          },
                        ].map((booking, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 border rounded-lg"
                          >
                            <div>
                              <p className="font-medium">{booking.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {booking.time} - {booking.class}
                              </p>
                            </div>
                            <Badge
                              variant={
                                booking.status === "confirmed"
                                  ? "default"
                                  : "secondary"
                              }
                            >
                              {booking.status === "confirmed"
                                ? "Подтверждено"
                                : "Ожидает"}
                            </Badge>
                          </div>
                        ))}
                      </div>
                      <div className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
                        <h3 className="font-medium mb-4">Статистика записей</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-sm">Записи за сегодня</span>
                            <span className="font-medium">24</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Отмены</span>
                            <span className="font-medium">2</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Процент явки</span>
                            <span className="font-medium">92%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="clients" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Users" className="h-5 w-5" />
                      База клиентов
                    </CardTitle>
                    <CardDescription>
                      Полная информация о клиентах, их абонементах и истории
                      посещений
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          name: "Анна Петрова",
                          membership: "Безлимит",
                          visits: "24/∞",
                          expires: "15.08.2024",
                          status: "active",
                        },
                        {
                          name: "Михаил Сидоров",
                          membership: "8 занятий",
                          visits: "3/8",
                          expires: "28.07.2024",
                          status: "active",
                        },
                        {
                          name: "Ольга Кузнецова",
                          membership: "Заморожен",
                          visits: "12/20",
                          expires: "10.09.2024",
                          status: "frozen",
                        },
                      ].map((client, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                              <Icon
                                name="User"
                                className="h-5 w-5 text-primary"
                              />
                            </div>
                            <div>
                              <p className="font-medium">{client.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {client.membership}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <p className="text-sm font-medium">
                                {client.visits}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                до {client.expires}
                              </p>
                            </div>
                            <Badge
                              variant={
                                client.status === "active"
                                  ? "default"
                                  : "secondary"
                              }
                            >
                              {client.status === "active"
                                ? "Активен"
                                : "Заморожен"}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="DollarSign" className="h-5 w-5" />
                        Финансовая отчетность
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm">Доход за месяц</span>
                          <span className="font-medium">₽487,650</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Расходы</span>
                          <span className="font-medium">₽163,200</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Прибыль</span>
                          <span className="font-medium text-primary">
                            ₽324,450
                          </span>
                        </div>
                      </div>
                      <Progress value={67} className="h-2" />
                      <p className="text-xs text-muted-foreground">
                        Рентабельность: 67%
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="UserCheck" className="h-5 w-5" />
                        Клиентская аналитика
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm">Всего клиентов</span>
                          <span className="font-medium">324</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Новые за месяц</span>
                          <span className="font-medium">42</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Удержание</span>
                          <span className="font-medium text-secondary">
                            89%
                          </span>
                        </div>
                      </div>
                      <Progress value={89} className="h-2" />
                      <p className="text-xs text-muted-foreground">
                        Средний чек: ₽1,504
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              Готовы автоматизировать свою студию?
            </h2>
            <p className="text-xl text-white/90">
              Присоединяйтесь к 200+ студиям, которые уже используют Fitbase для
              роста своего бизнеса
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="gap-2">
                <Icon name="Rocket" className="h-4 w-4" />
                Начать бесплатно
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 text-white border-white hover:bg-white hover:text-primary"
              >
                <Icon name="MessageCircle" className="h-4 w-4" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Dumbbell" className="h-6 w-6 text-primary" />
                <span className="font-heading text-lg font-bold">Fitbase</span>
              </div>
              <p className="text-sm text-muted-foreground">
                CRM для фитнес-студий, созданная для автоматизации и роста
                бизнеса
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Продукт</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Онлайн-запись</li>
                <li>CRM система</li>
                <li>Аналитика</li>
                <li>Мобильное приложение</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Центр помощи</li>
                <li>Обучение</li>
                <li>Техподдержка</li>
                <li>Миграция данных</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>hello@fitbase.ru</li>
                <li>+7 (495) 123-45-67</li>
                <li>Москва, Россия</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 Fitbase. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
